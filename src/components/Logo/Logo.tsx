import { Group, Image, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import classes from './Logo.module.css';
import logo from '@/assets/images/logo.svg';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => (
  <UnstyledButton className={classes.logo} component="a" href={href || '/'} {...others}>
    <Group gap="xs">
      <Image src={logo} height={24} width={24} alt="Eficens logo" />
      {/* <Text fw={700}>Eficens IT</Text> */}
    </Group>
  </UnstyledButton>
);

export default Logo;
