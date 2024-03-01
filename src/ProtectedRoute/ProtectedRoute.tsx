import type React from 'react';
import { useEffect, useState } from 'react';
import { Center, Loader } from '@mantine/core';
import { UserAttributes, getUserAttributes, isSessionValid } from '@/cognito';
import { useCognito } from '@/context/CognitoProvider';

export interface ProtectedRouteProps extends React.PropsWithChildren {
  unauthenticated: React.ReactNode;
  onValidate?: (attributes: UserAttributes) => void;
}

export const ProtectedRoute = ({ children, unauthenticated, onValidate }: ProtectedRouteProps) => {
  const { config } = useCognito();
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const validHandler = () => {
    getUserAttributes(config)
      .then((attributes) => {
        onValidate?.(attributes);
      })
      .catch((reason: Error) => {
        console.error(reason.name, reason.message);
      });
  };

  // Start a timer to refresh the token and react to it becoming invalid
  useEffect(() => {
    const INTERVAL = 5 * 1000; // 5 seconds
    const interval = setInterval(() => {
      isSessionValid(config)
        .then((value) => {
          setIsValid(value);
          if (value) validHandler();
        })
        .catch((reason: Error) => {
          console.error(reason.name, reason.message);
        });
    }, INTERVAL);

    // Clear the timer on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    isSessionValid(config)
      .then((value) => {
        setIsValid(value);
        if (value) validHandler();
      })
      .catch((reason: Error) => {
        console.error(reason.name, reason.message);
      });
  }, []);

  if (isValid === undefined) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (isValid) return <>{children}</>;

  return <>{unauthenticated}</>;
};
