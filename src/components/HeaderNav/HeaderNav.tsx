import { ActionIcon, Burger, Group, Menu, Tooltip, useMantineColorScheme } from '@mantine/core';
import {
  IconCircleHalf2,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconMoonStars,
  IconPower,
  IconSunHigh,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Logo } from '../Logo';

const ICON_SIZE = 20;

type HeaderNavProps = {
  opened?: boolean;
  handleOpen?: () => void;
  mobileOpened?: boolean;
  toggleMobile?: () => void;
  desktopOpened?: boolean;
  toggleDesktop?: () => void;
};

const HeaderNav: React.FC<HeaderNavProps> = ({
  desktopOpened,
  toggleDesktop,
  toggleMobile,
  mobileOpened,
}) => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  // const laptop_match = useMediaQuery('(max-width: 992px)');
  // const tablet_match = useMediaQuery('(max-width: 768px)');
  const mobile_match = useMediaQuery('(max-width: 425px)');

  return (
    <Group justify="space-between">
      <Group gap={0}>
        <Tooltip label="Toggle side navigation">
          <ActionIcon visibleFrom="md" onClick={toggleDesktop}>
            {desktopOpened ? <IconLayoutSidebarLeftCollapse /> : <IconLayoutSidebarLeftExpand />}
          </ActionIcon>
        </Tooltip>
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="md" size="sm" />
        {/*<Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="md" size="sm"/>*/}
        {!mobile_match && (
          <>
            <Logo />
            {/* <TextInput
              placeholder="search"
              rightSection={<IconSearch size={ICON_SIZE} />}
              ml="md"
              style={{ width: tablet_match ? 'auto' : rem(400) }}
            /> */}
          </>
        )}
        {mobile_match && (
          <>
            <Logo />
            {/* <Avatar src={logo} radius="xl" /> */}
            {/* <IconSearch size={ICON_SIZE} /> */}
          </>
        )}
      </Group>
      <Group>
        <Tooltip label="Logout">
          <ActionIcon>
            <IconPower size={ICON_SIZE} />
          </ActionIcon>
        </Tooltip>
        <Menu shadow="lg" width={200}>
          <Menu.Target>
            <Tooltip label="Switch color modes">
              <ActionIcon variant="light">
                {colorScheme === 'auto' ? (
                  <IconCircleHalf2 size={ICON_SIZE} />
                ) : colorScheme === 'dark' ? (
                  <IconMoonStars size={ICON_SIZE} />
                ) : (
                  <IconSunHigh size={ICON_SIZE} />
                )}
              </ActionIcon>
            </Tooltip>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label tt="uppercase" ta="center" fw={600}>
              Select color modes
            </Menu.Label>
            <Menu.Item
              leftSection={<IconSunHigh size={16} />}
              onClick={() => setColorScheme('light')}
            >
              Light
            </Menu.Item>
            <Menu.Item
              leftSection={<IconMoonStars size={16} />}
              onClick={() => setColorScheme('dark')}
            >
              Dark
            </Menu.Item>
            <Menu.Item
              leftSection={<IconCircleHalf2 size={16} />}
              onClick={() => setColorScheme('auto')}
            >
              Use System Colors
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
};

export default HeaderNav;
