/* eslint-disable consistent-return */
/* eslint-disable no-promise-executor-return */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/return-await */
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import type { CognitoUserSession } from 'amazon-cognito-identity-js';

import { getCurrentUser, getUser } from './utility';
import type { CognitoConfig } from './utility';

class LoginMFAException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LoginMFAException';
  }
}

export const logout = (config: CognitoConfig) => {
  let cognitoUser = getCurrentUser(config);
  cognitoUser?.signOut();

  // Try again in case we cleared session storage and still need to clear cookie storage
  cognitoUser = getCurrentUser(config);
  cognitoUser?.signOut();
};

export const login = async (
  config: CognitoConfig,
  email: string,
  password: string,
  remember: boolean = false,
  totp?: string
) => {
  return await new Promise<CognitoUserSession>((resolve, reject) => {
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const cognitoUser = getUser(config, email, remember);

    // Start by clearing any current sessions
    logout(config);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        resolve(session);
      },
      onFailure: (err) => {
        reject(err);
      },
      totpRequired: () => {
        if (totp !== undefined) {
          cognitoUser.sendMFACode(
            totp,
            {
              onSuccess: (session) => {
                resolve(session);
              },
              onFailure: (err) => {
                reject(err);
              },
            },
            'SOFTWARE_TOKEN_MFA'
          );
          return;
        }

        reject(new LoginMFAException('No MFA token provided.'));
      },
    });
  });
};

export const isSessionValid = async (config: CognitoConfig) => {
  return await new Promise<boolean>((resolve, reject) => {
    const cognitoUser = getCurrentUser(config);
    if (cognitoUser === null) return resolve(false);

    cognitoUser.getSession((err: Error, session: CognitoUserSession | null) => {
      if (err !== null) return reject(err);
      if (session === null) return resolve(false);

      resolve(session.isValid());
    });
  });
};

export const changePassword = async (
  config: CognitoConfig,
  email: string,
  oldPassword: string,
  newPassword: string,
  remember: boolean = false
) => {
  return await new Promise<CognitoUserSession>((resolve, reject) => {
    const authenticationData = { Username: email, Password: oldPassword };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const cognitoUser = getUser(config, email, remember);

    // Start by clearing any current sessions
    logout(config);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        console.log('dd', session);
        cognitoUser.changePassword(oldPassword, newPassword, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log('Successfully changed password of the user.');
            console.log(result);
          }
        });
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};
