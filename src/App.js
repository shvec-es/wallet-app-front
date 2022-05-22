import { Suspense, lazy, useEffect } from 'react';
import Media from 'react-media';

import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage';
import { BackGround, Header, PublicRoute, PrivateRoute } from 'components';
import { fetchCurrentUser } from './redux/auth/auth-operations';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" />

      <BackGround />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Header />
                <DashboardPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
