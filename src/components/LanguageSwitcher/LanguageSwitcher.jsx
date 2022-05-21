import { useTranslation } from 'react-i18next';
import { Container, Select } from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const supportedLanguages = [
    { code: 'en', name: 'en' },
    { code: 'uk', name: 'ua' },
  ];

  const currentLng = language.slice(0, 2);

  const handleChange = event => {
    const { value } = event.target;
    changeLanguage(value);
  };

  return (
    <Container>
      <Select value={currentLng} onChange={handleChange}>
        {supportedLanguages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default LanguageSwitcher;
