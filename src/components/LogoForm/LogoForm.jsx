import Media from 'react-media';
import icons from 'images/sprite.svg';
import { Wrapper, Text, Icon } from './LogoForm.styled';
import { useTranslation } from 'react-i18next';

const LogoForm = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Media query="(min-width: 768px)">
        <Icon>
          <use href={`${icons}#register`} />
        </Icon>
      </Media>

      <Text>{t('app_title')}</Text>
    </Wrapper>
  );
};

export default LogoForm;
