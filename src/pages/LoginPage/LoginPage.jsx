import Media from 'react-media';
import {Container, LoginForm} from 'components';

import icons from 'images/sprite.svg';
import { Section, ImgWrapper, Img, AppTitle } from './LoginPage.styled';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();

  return (

   
    <Container>
       <Section>
         <ImgWrapper>
        <Media query="(min-width: 768px)">
          <Img>
            <use href={`${icons}#login`} />
          </Img>
        </Media>

        <AppTitle>{t('app_title')}</AppTitle>
      </ImgWrapper>

        <LoginForm />
        </Section>
</Container>
     


  );
}

export default LoginPage;
