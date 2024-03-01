import {
  IconBook2,
  IconBrandAuth0,
  IconBriefcase,
  IconCalendar,
  IconChartArcs3,
  IconChartBar,
  IconChartInfographic,
  IconFileInvoice,
  IconHome,
  IconLayersSubtract,
  IconLifebuoy,
  IconList,
  IconListDetails,
  IconLogin2,
  IconMessages,
  IconReceipt2,
  IconRotateRectangle,
  IconUserCircle,
  IconUserCode,
  IconUserPlus,
  IconUserShield,
} from '@tabler/icons-react';
import { PATH_APPS, PATH_AUTH, PATH_DASHBOARD, PATH_DOCS, PATH_PAGES } from '@/routes';

export const MOCK_DATA = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Default', icon: IconChartBar, link: PATH_DASHBOARD.default },
      {
        label: 'Analytics',
        icon: IconChartInfographic,
        link: PATH_DASHBOARD.analytics,
      },
      { label: 'SaaS', icon: IconChartArcs3, link: PATH_DASHBOARD.saas },
    ],
  },
  {
    title: 'Apps',
    links: [
      { label: 'Home', icon: IconHome, link: PATH_APPS.home },
      { label: 'Game', icon: IconCalendar, link: PATH_APPS.game },
      { label: 'Users', icon: IconCalendar, link: PATH_APPS.users },
      { label: 'Profile', icon: IconUserCircle, link: PATH_APPS.profile },
      { label: 'Settings', icon: IconUserCode, link: PATH_APPS.settings },
      { label: 'Chat', icon: IconMessages, link: PATH_APPS.chat },
      { label: 'Projects', icon: IconBriefcase, link: PATH_APPS.projects },
      { label: 'Orders', icon: IconListDetails, link: PATH_APPS.orders },
      {
        label: 'Invoices',
        icon: IconFileInvoice,
        links: [
          {
            label: 'List',
            link: PATH_APPS.invoices.all,
          },
          {
            label: 'Details',
            link: PATH_APPS.invoices.sample,
          },
        ],
      },
      { label: 'Tasks', icon: IconListDetails, link: PATH_APPS.tasks },
      { label: 'Calendar', icon: IconCalendar, link: PATH_APPS.calendar },
    ],
  },
  {
    title: 'Auth',
    links: [
      { label: 'Sign In', icon: IconLogin2, link: PATH_AUTH.signin },
      { label: 'Sign Up', icon: IconUserPlus, link: PATH_AUTH.signup },
      {
        label: 'Reset Password',
        icon: IconRotateRectangle,
        link: PATH_AUTH.passwordReset,
      },
      { label: 'Clerk', icon: IconUserShield, link: PATH_AUTH.clerk },
      { label: 'Auth0', icon: IconBrandAuth0, link: PATH_AUTH.auth0 },
    ],
  },
  {
    title: 'Pages',
    links: [
      { label: 'Pricing', icon: IconReceipt2, link: PATH_PAGES.pricing },
      { label: 'Blank Page', icon: IconLayersSubtract, link: PATH_PAGES.blank },
    ],
  },
  {
    title: 'Documentation',
    links: [
      {
        label: 'Getting started',
        icon: IconLifebuoy,
        link: PATH_DOCS.root,
      },
      {
        label: 'Documentation',
        icon: IconBook2,
        link: PATH_DOCS.root,
      },
      { label: 'Changelog', icon: IconList },
    ],
  },
];

export const MOCK_USER_PROFILE = {
  avatar: 'https://avatar.iran.liara.run/public/boy?username=Ash',
  name: 'John Doe',
  email: 'John.Doe@eficensid.com',
  job: 'Experienced Software Engineer | Tech stack: Javascript, Typescript, React, Nextjs, Nodejs | UI/UX Designer',
};
