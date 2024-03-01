import { ActionIcon, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Logo } from '../Logo';

type HeaderNavProps = {};

const GuestHeaderNav: React.FC<HeaderNavProps> = () => {
  // const laptop_match = useMediaQuery('(max-width: 992px)');
  // const tablet_match = useMediaQuery('(max-width: 768px)');
  const mobile_match = useMediaQuery('(max-width: 425px)');

  return (
    <Group justify="space-between">
      <Group gap={0}>
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
      </Group>
      <Group>
        {mobile_match && (
          <ActionIcon>
            <Logo />
            {/* <IconSearch size={ICON_SIZE} /> */}
          </ActionIcon>
        )}
      </Group>
    </Group>
  );
};

export default GuestHeaderNav;
