import { useState } from 'react';
import { Menu, ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { theme } from '@/theme';

const data = [
  {
    label: 'Eficens',
  },
  {
    label: 'Alibaba',
  },
  {
    label: 'Theme2',
  },
  {
    label: 'Theme3',
  },
  {
    label: 'Theme4',
  },
  {
    label: 'Theme5',
  },
];

type ThemePickerProps = {
  type: 'collapsed' | 'expanded';
};

const ThemePicker = ({ type }: ThemePickerProps) => {
  const [opened, setOpened] = useState(type === 'expanded');

  const handleThemeChange = ({ label }: any) => {
    console.log(label);
    theme.primaryColor = label;
  };
  const items = data.map((item) => (
    <Menu.Item onClick={() => handleThemeChange(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="sm"
      withinPortal
      width={200}
      defaultOpened={opened}
    >
      <Menu.Target>
        <ThemeIcon variant="transparent" radius="xl">
          <IconPhoto style={{ width: '70%', height: '70%' }} />
        </ThemeIcon>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default ThemePicker;
