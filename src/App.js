import { Suspense, Fragment, lazy } from 'react';
import Media from 'react-media';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage';
import {
  BackGround,
  Container,
  Header,
  Navigation,
  PublicRoute,
  PrivateRoute
 
} from 'components';

const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: 'login-page' */)
);
const RegistrationPage = lazy(() => import('pages/registrationPage'));

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} theme="colored" />
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>

      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Container>
          {/* <Navigation /> */}
        
          <Routes>
             {/* <Route path="*" element={<DashboardPage />}></Route> */}
            <Route path="/login" element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
              }></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>


        </Container>
      </Suspense>
    </>
  );
}

export default App;
