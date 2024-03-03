import React, { useEffect, useState } from 'react';
import { Box, Collapse, Group, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Links.module.css';

interface LinksGroupProps {
  onClose?: () => void;
  icon?: any;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: {
    label: string;
    link: string;
  }[];
}

const LinksGroup: React.FC<LinksGroupProps> = (props) => {
  const { icon: Icon, label, initiallyOpened, link, links } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  // const [currentPath, setCurrentPath] = useState<string | undefined>();
  const tablet_match = useMediaQuery('(max-width: 768px)');

  const ChevronIcon = IconChevronRight;

  const items = (hasLinks ? links : []).map((navLink) => (
    <Link
      className={classes.link}
      to={navLink.link}
      key={navLink.label}
      data-active={navLink.link.toLowerCase() === location.pathname || '' || undefined}
    >
      {navLink.label}
    </Link>
  ));

  useEffect(() => {
    const paths = location.pathname.split('/');
    setOpened(paths.includes(label.toLowerCase()));
    // setCurrentPath(_.last(paths) || undefined);

    // console.log(currentPath);
  }, [location.pathname, label]);

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          link && navigate(link || '#');
          tablet_match && !hasLinks && props.onClose && props.onClose();
        }}
        className={classes.control}
        data-active={opened || undefined}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Icon size={18} />
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export { LinksGroup };
