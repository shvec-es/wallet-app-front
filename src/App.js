import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
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

const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

function App() {
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
            <Route path="*" element={<DashboardPage />}></Route>
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            ></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
