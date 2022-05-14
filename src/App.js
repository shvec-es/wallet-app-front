import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import Container from 'components/Container';
import DashboardPage from 'pages/dashboardPage';

function App() {
  return (
    <Container>
      <h1>Wallet</h1>
      <Suspense fallback={
        <p>Loading...</p>
      }>
        <Routes>
          <Route path='/' element={ <LoginPage/>}>
          </Route>
        </Routes>
        <DashboardPage />      
      </Suspense>
    </Container>
  );
}

export default App;
