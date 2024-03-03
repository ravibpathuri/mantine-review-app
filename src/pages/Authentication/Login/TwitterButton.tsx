import { Button, ButtonProps, Text } from '@mantine/core';

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button leftSection={<Text>Twitter</Text>} variant="default" {...props} />;
}
