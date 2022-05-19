import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage';
import {
  BackGround,
  Container,
  Header,
  Navigation,
 
} from 'components';
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: 'login-page' */)
);
const RegistrationPage = lazy(() => import('pages/registrationPage'));

function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>

      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Container>
          {/* <Navigation /> */}
        
          <Routes>
             <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>


       
          {/* <DashboardPage /> */}
        </Container>
      </Suspense>
    </>
  );
}

export default App;
