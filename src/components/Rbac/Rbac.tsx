import React, { useEffect } from 'react';
import { Center, Loader } from '@mantine/core';

import { useCognito } from '@/context';
import { getUserAttributes, isSessionValid } from '@/cognito';
import type { UserAttributes } from '@/cognito';

interface RabcProps extends React.PropsWithChildren {
  requiredRole: 'SuperAdmin' | 'HR' | 'Admin' | 'Student' | 'Any';
}

const Rbac: React.FC<RabcProps> = ({ requiredRole, children }) => {
  const { config } = useCognito();
  const [isValid, setIsValid] = React.useState<boolean | undefined>();
  const [userAttributes, setUserAttributes] = React.useState<UserAttributes | undefined>();

  const validHandler = () => {
    getUserAttributes(config)
      .then((attributes) => {
        setUserAttributes(attributes);
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
  console.log('userAttributes', { userAttributes, requiredRole });

  return <>{children}</>;
};

export default Rbac;
