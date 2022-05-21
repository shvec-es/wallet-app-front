import { Suspense, Fragment, lazy, useEffect } from 'react';
import Media from 'react-media';

import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage';
import {
  LanguageSwitcher,
  BackGround,
  Container,
  Header,
  PublicRoute,
  PrivateRoute,
} from 'components';
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
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>
      <Suspense fallback={<p>Loading...</p>}>
        <LanguageSwitcher />
        <Header />
        <Container>
          <Routes>
            <Route path="*" element={
              <PrivateRoute>
              <DashboardPage />
              </PrivateRoute>
            }></Route>
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            ></Route>
            <Route path="/register" element={
              <PublicRoute restricted>
                <RegistrationPage />
                </PublicRoute>
            }></Route>
          </Routes>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
