import icons from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';
import { Link, Icon, Title } from './Logo.styled';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <Icon>
        <use href={`${icons}#wallet`}></use>
      </Icon>
      <Title>{t('app_name')}</Title>
    </Link>
  );
};

export default Logo;
