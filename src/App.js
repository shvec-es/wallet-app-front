import { Suspense, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'components/LoginPage/LoginPage';
import { BackGround, Container } from 'components';
import DashboardPage from 'pages/dashboardPage';
import HeaderPage from 'pages/headerPage';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Header from './components/Header'

function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>
      <Header />
      <Container>
        {/* <HeaderPage /> */}
        <Navigation />
        <Balance />
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
