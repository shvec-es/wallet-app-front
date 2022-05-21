import Media from 'react-media';
import icons from 'images/sprite.svg';
import { Wrapper, Text, Icon } from './LogoForm.styled';
import { useTranslation } from 'react-i18next';

const LogoForm = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {/* <Media
        queries={{
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.medium && <img src={Icon} alt="Logo" />}
            {matches.large && <img src={IconBig} alt="Logo" />}
          </Fragment>
        )}
      </Media> */}

      <Media query="(min-width: 768px)">
        <Icon>
          <use href={`${icons}#register`} />
        </Icon>
      </Media>

      {/* <Media query="(min-width: 768px)">
        <img src={Icon} alt="Logo" />
      </Media>

      <Media query="(min-width: 1240px)">
        <img src={IconBig} alt="Logo" />
      </Media> */}
      <Text>{t('app_title')}</Text>
    </Wrapper>
  );
};

export default LogoForm;
