import LoginForm from '../../components/LoginForm/LoginForm';
import loginImg from '../../images/loginImg.svg';
import { Container } from 'components';
import { Section, ImgWrapper, Img, AppTitle } from './LoginPage.styled';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();

  return (
    <Section>
      {/* <Container> */}
      <ImgWrapper>
        <Img src={loginImg} alt="loginImg" />
        <AppTitle>{t('app_title')}</AppTitle>
      </ImgWrapper>

      <LoginForm />

      {/* </Container> */}
    </Section>
  );
}

export default LoginPage;
