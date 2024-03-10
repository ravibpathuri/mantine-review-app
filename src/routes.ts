function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  quesionBank: path(ROOTS_DASHBOARD, 'question-bank'),
  examManagement: path(ROOTS_DASHBOARD, 'exam-management'),
};
