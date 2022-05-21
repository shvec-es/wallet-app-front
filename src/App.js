import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage';
import { Logo, LanguageSwitcher } from 'components';
import {
  BackGround,
  Container,
  Header,
  LoginPage,
  Navigation,
} from 'components';

const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <LanguageSwitcher />
        {/* <Header /> */}

        <Container>
          <Media query="(min-width: 768px)">
            <BackGround />
          </Media>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
          </Routes>
          {/* <DashboardPage /> */}
        </Container>
      </Suspense>
    </>
  );
}

export default App;
