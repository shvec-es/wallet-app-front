import { Suspense, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'components/LoginPage/LoginPage';
import { BackGround, Container } from 'components';
import DashboardPage from 'pages/dashboardPage';
import HeaderPage from './components/HeaderPage/HeaderPage.jsx'

function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>

      <HeaderPage />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
          </Routes>
          <DashboardPage />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
