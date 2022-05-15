import { Suspense, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'components/LoginPage/LoginPage';
import { BackGround, Container } from 'components';
import DashboardPage from 'pages/dashboardPage';

function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>

      <Container>
        <h1>Wallet</h1>
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
