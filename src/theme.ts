import {
  ActionIcon,
  DEFAULT_THEME,
  Loader,
  MantineColorsTuple,
  createTheme,
  rem,
} from '@mantine/core';

const eficensColorTheme: MantineColorsTuple = [
  '#f2f0ff',
  '#e0dff2',
  '#bfbdde',
  '#9b98ca',
  '#7d79ba',
  '#6a65b0',
  '#605bac',
  '#504c97',
  '#464388',
  '#3b3979',
];

const alibabaColorTheme: MantineColorsTuple = [
  '#e5f8ff',
  '#d3eafb',
  '#aad2ef',
  '#7eb8e5',
  '#59a3dd',
  '#4195d8',
  '#328fd6',
  '#227bbe',
  '#116dac',
  '#005f99',
];

const colorTheme2: MantineColorsTuple = [
  '#e4faff',
  '#d5f0f9',
  '#addeee',
  '#81cbe3',
  '#5fbbda',
  '#48b2d5',
  '#39add3',
  '#2797bc',
  '#1586a9',
  '#007595',
];

const colorTheme3: MantineColorsTuple = [
  '#e4fcfa',
  '#d8f3ee',
  '#b6e3db',
  '#90d3c8',
  '#70c6b7',
  '#5cbeac',
  '#4ebaa7',
  '#3da392',
  '#2f9282',
  '#177f6f',
];

const colorTheme4: MantineColorsTuple = [
  '#f2f4f7',
  '#e3e5e9',
  '#c5cad2',
  '#a2acbd',
  '#8693ab',
  '#7483a0',
  '#6a7b9c',
  '#596988',
  '#4d5d7a',
  '#40506e',
];
const colorTheme5: MantineColorsTuple = [
  '#e6fcf5',
  '#d9f3ea',
  '#b5e3d5',
  '#90d4bd',
  '#70c7a9',
  '#5bbe9c',
  '#4eba96',
  '#3ca382',
  '#309273',
  '#1d7f61',
];

const information: MantineColorsTuple = [
  '#e0fbff',
  '#cbf2ff',
  '#9ae2ff',
  '#64d2ff',
  '#3cc5fe',
  '#23bcfe',
  '#09b8ff',
  '#00a1e4',
  '#0090cd',
  '#007cb5',
];

const warning: MantineColorsTuple = [
  '#fff8e1',
  '#ffefcc',
  '#ffdd9b',
  '#ffca64',
  '#ffba38',
  '#ffb01b',
  '#ffab09',
  '#e39500',
  '#ca8500',
  '#af7100',
];

const danger: MantineColorsTuple = [
  '#ffeaec',
  '#fed4d6',
  '#f6a5aa',
  '#ef757c',
  '#e94c54',
  '#e6323c',
  '#e5232e',
  '#cc1521',
  '#b60d1c',
  '#a00016',
];

const TestAppTheme: MantineColorsTuple = [
  '#e1faff',
  '#ceeffe',
  '#a1dcf8',
  '#70c8f3',
  '#49b8ef',
  '#30adec',
  '#1ca8ec',
  '#0292d3',
  '#0082be',
  '#0071a8',
];

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: 'Public Sans, sans-serif',
  scale: 1,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: `Public Sans, ${DEFAULT_THEME.fontFamily}` },
  fontSizes: { xs: rem(10), sm: rem(13), md: rem(14), lg: rem(16), xl: rem(20) },
  primaryColor: 'testApp',
  defaultRadius: 'md',
  focusRing: 'auto',
  defaultGradient: {
    from: '#797EF6',
    to: '#1AA7EC',
    deg: 270,
  },

  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'subtle',
      },
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'bars',
      },
    }),
  },
  primaryShade: { light: 6, dark: 7 },
  // defaultRadius: 'xl',
  fontSmoothing: true,
  colors: {
    eficens: eficensColorTheme,
    alibaba: alibabaColorTheme,
    theme2: colorTheme2,
    theme3: colorTheme3,
    theme4: colorTheme4,
    theme5: colorTheme5,
    information,
    warning,
    danger,
    testApp: TestAppTheme,
  },
});
