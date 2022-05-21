import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage';
import { Logo, LanguageSwitcher } from 'components';
import { BackGround, Container, Header, Navigation } from 'components';

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
        <Header />
        <LanguageSwitcher />
        <Container>
          <Media query="(min-width: 768px)">
            <BackGround />
          </Media>
          {/* <Navigation /> */}

          <Routes>
            <Route path="*" element={<DashboardPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
