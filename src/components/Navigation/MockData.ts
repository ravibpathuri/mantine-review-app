import { IconChartArcs3, IconChartBar, IconChartInfographic } from '@tabler/icons-react';
import { PATH_DASHBOARD } from '@/routes';

export const MOCK_DATA = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Dashboard', icon: IconChartBar, link: PATH_DASHBOARD.root },
      {
        label: 'Question Bank',
        icon: IconChartInfographic,
        link: PATH_DASHBOARD.quesionBank,
      },
      { label: 'Exam Management', icon: IconChartArcs3, link: PATH_DASHBOARD.examManagement },
    ],
  },
];

export const MOCK_USER_PROFILE = {
  avatar: 'https://avatar.iran.liara.run/public/boy?username=Ash',
  name: 'John Doe',
  email: 'John.Doe@eficensid.com',
  job: 'Experienced Software Engineer | Tech stack: Javascript, Typescript, React, Nextjs, Nodejs | UI/UX Designer',
};
