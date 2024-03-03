import React, { ReactNode } from 'react';
import {
  Breadcrumbs,
  BreadcrumbsProps,
  Divider,
  Flex,
  Paper,
  PaperProps,
  rem,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { Surface } from '../Surface';

type PageHeaderProps = {
  title: string;
  breadcrumbItems?: any;
  actionItems?: ReactNode;
} & PaperProps;

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbItems,
  actionItems,
  ...others
}) => {
  const theme = useMantineTheme();
  const colorScheme = useColorScheme();

  const BREADCRUMBS_PROPS: Omit<BreadcrumbsProps, 'children'> = {
    style: {
      a: {
        padding: rem(8),
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        color: colorScheme === 'dark' ? theme.white : theme.black,

        '&:hover': {
          transition: 'all ease 150ms',
          backgroundColor: colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
          textDecoration: 'none',
        },
      },
    },
  };

  return (
    <>
      <Surface mb={5} component={Paper} style={{ backgroundColor: 'transparent' }} {...others}>
        <Flex
          justify="space-between"
          direction={{ base: 'column', sm: 'row' }}
          gap={{ base: 'sm', sm: 4 }}
        >
          <Stack gap={4}>
            <Title order={3}>{title}</Title>
            <Breadcrumbs {...BREADCRUMBS_PROPS}>{breadcrumbItems}</Breadcrumbs>
          </Stack>

          <Flex align="center" gap="sm">
            {actionItems}
          </Flex>
        </Flex>
      </Surface>
      <Divider />
    </>
  );
};

export { PageHeader };
