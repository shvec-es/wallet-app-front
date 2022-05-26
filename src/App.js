import { Suspense, lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BackGround, Header, PublicRoute, PrivateRoute } from 'components';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import Spinner from 'components/Loader';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './components/Theme/theme';
import  ThemeSwitcher  from './components/ThemeSwitcher/ThemeSwitcher';

const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: 'registration-page' */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: 'dashboard-page' */),
);

function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);


  return (
    <>
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToastContainer autoClose={5000} pauseOnHover theme="colored" />
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme}/>
      <BackGround/>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Header />
                <DashboardPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          ></Route>

          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
