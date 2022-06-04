import { Switcher } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  return (
    <>
      <Switcher onClick={toggleTheme} theme>
        {theme === 'dark' ? (
          <span aria-label="Light mode" role="img">
            🌝
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌚
          </span>
        )}
      </Switcher>
    </>
  );
};

export default ThemeSwitcher;
