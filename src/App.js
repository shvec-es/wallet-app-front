import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BackGround, Header, PublicRoute, PrivateRoute } from 'components';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import Spinner from 'components/Loader';

const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: 'registration-page' */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: 'dashboard-page' */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />

      <BackGround />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/*"
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

          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
