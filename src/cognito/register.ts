/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable arrow-body-style */
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import type { ISignUpResult } from 'amazon-cognito-identity-js';

import { getPool } from './utility';
import type { CognitoConfig } from './utility';

export const signUp = async (config: CognitoConfig, email: string, password: string) => {
  return await new Promise<ISignUpResult>((resolve, reject) => {
    const userPool = getPool(config);

    const dataEmail = { Name: 'email', Value: email };
    const attributeEmail = new CognitoUserAttribute(dataEmail);

    const attributeList: CognitoUserAttribute[] = [];
    attributeList.push(attributeEmail);

    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err !== null) return reject(err);
      if (result === undefined) return reject(new Error('Did not get a user from signUp.'));
      resolve(result);
    });
  });
};
