import { useTranslation } from 'react-i18next';
import { Container, Select } from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation().i18n;

  return (
    <Container>
      <Select
        value={language}
        onChange={({ target: { value } }) => changeLanguage(value)}
      >
        <option value="en">en</option>
        <option value="uk">ua</option>
      </Select>
    </Container>
  );
};

export default LanguageSwitcher;
