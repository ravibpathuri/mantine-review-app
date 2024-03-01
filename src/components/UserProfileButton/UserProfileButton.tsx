import React, { ReactNode } from 'react';
import { Avatar, Group, Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserProfileButton.module.css';

type UserProfileButtonProps = {
  image: string;
  name: string;
  email: string;
  icon?: ReactNode;
  asAction?: boolean;

  signOffIcon?: ReactNode;
} & UnstyledButtonProps;

const UserProfileButton: React.FC<UserProfileButtonProps> = ({
  image,
  name,
  email,
  icon,
  asAction,
  signOffIcon,
  ...others
}) => (
  <UnstyledButton className={classes.user} {...others}>
    <Group>
      <Avatar src={image} radius="xl" />

      <div style={{ flex: 1 }}>
        <Text size="sm" fw={500}>
          {name}
        </Text>

        <Text size="xs">{email}</Text>
      </div>

      {icon && asAction && <IconChevronRight size="0.9rem" stroke={1.5} />}

      {signOffIcon}
    </Group>
  </UnstyledButton>
);

export default UserProfileButton;
