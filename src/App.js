import { Suspense } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/dashboardPage';
import {
  BackGround,
  Container,
  Header,
  Navigation,
  LoginPage,
  Balance,
} from 'components';

function App() {
  return (
    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>
      <Header />
      <Container>
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
