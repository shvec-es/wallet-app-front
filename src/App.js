import { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import DashboardPage from 'pages/dashboardPage';

function App() {
  return (
    <>
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
    
    </>
  );
}

export default App;
