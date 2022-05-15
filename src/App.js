
import { Suspense, lazy } from 'react';
import Media from 'react-media';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import { BackGround, Container } from 'components';

import DashboardPage from 'pages/dashboardPage';

function App() {
  return (

    <>
      <Media query="(min-width: 768px)">
        <BackGround />
      </Media>

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
