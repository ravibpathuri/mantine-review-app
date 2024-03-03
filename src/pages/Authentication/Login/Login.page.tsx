import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Container,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Anchor,
  Stack,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import { Logo } from '@/components';
import { login, changePassword } from '@/cognito';
import { useCognito } from '@/context/CognitoProvider';

const LoginPage = (props: PaperProps) => {
  const { config } = useCognito();
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Container size="md">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Logo />

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form
          onSubmit={form.onSubmit(async () => {
            const result = await login(config, form.values.email, form.values.password);

            console.log('result', { result });
          })}
        >
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@eficens.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component={Link} c="dimmed" to="/authentication/register" size="xs">
              Dont have an account? Register
            </Anchor>
            <Button type="submit">Login</Button>
            <Button
              type="button"
              onClick={() =>
                changePassword(config, form.values.email, form.values.password, 'Reset@123')
              }
            >
              Change Password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export { LoginPage };
