import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import { HomePage } from './pages/Home';
import GamePage from './pages/Game/Game.page';
import { ExamLayout, AppLayout } from '@/layout';
import { UsersPage } from './pages/User/Users.page';
import { UserDetailsPage } from './pages/UserDetails/UserDetails.page';
import { LoginPage } from './pages/Authentication';
import { QuestionBankPage } from './pages';
import { Rbac } from './components';

const SignedIn = true;

const PrivateAdminRoutes = () => {
  const location = useLocation();

  return SignedIn ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/authentication/signin" replace state={{ from: location }} />
  );
};

const PrivateExamRoutes = () => {
  const location = useLocation();

  return SignedIn ? (
    <ExamLayout>
      <Outlet />
    </ExamLayout>
  ) : (
    <Navigate to="/authentication/signin" replace state={{ from: location }} />
  );
};

const LoginRoute = () => (SignedIn ? <Navigate to="/" replace /> : <Outlet />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateAdminRoutes />,
    children: [
      {
        path: '/',
        element: (
          <Rbac requiredRole="Any">
            <HomePage />
          </Rbac>
        ),
      },
      { path: 'game', element: <GamePage /> },
      {
        path: 'users',
        element: (
          <Rbac requiredRole="SuperAdmin">
            <UsersPage />
          </Rbac>
        ),
      },
      {
        path: 'user/:id',
        element: (
          <Rbac requiredRole="SuperAdmin">
            <UserDetailsPage />
          </Rbac>
        ),
      },
      {
        path: 'question-bank',
        element: (
          <Rbac requiredRole="Admin">
            <QuestionBankPage />
          </Rbac>
        ),
      },
      { path: 'exam-management', element: <Rbac requiredRole="HR">Exam Management</Rbac> },
    ],
  },
  {
    path: 'exam',
    element: <PrivateExamRoutes />,
    children: [
      {
        path: '/exam',
        element: (
          <Rbac requiredRole="Student">
            <>Take Exam</>
          </Rbac>
        ),
      },
      {
        path: '/exam/q/:id',
        element: (
          <Rbac requiredRole="Student">
            <>Questions</>
          </Rbac>
        ),
      },
      {
        path: 'preview',
        element: (
          <Rbac requiredRole="Student">
            <>Exam Preview</>
          </Rbac>
        ),
      },
    ],
  },
  {
    path: '/authentication',
    element: <LoginRoute />,
    children: [
      { path: 'signin', element: <LoginPage /> },
      {
        path: 'register',
        element: <>TODO: Register page</>,
      },
    ],
  },
  {
    path: '*',
    element: <>TODO: 404 page</>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
