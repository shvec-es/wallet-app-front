import LoginForm from '../../components/LoginForm/LoginForm';
import loginImg from '../../images/loginImg.svg';
import { Section, ImgWrapper, Img, AppTitle } from './LoginPage.styled';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();

  return (

      <Section>
   
               <ImgWrapper>
           <Img src={loginImg} alt="loginImg"  />
      <AppTitle>Finance App</AppTitle>
          </ImgWrapper>
     
      <LoginForm />
        
    
    </Section>
  );
}

export default LoginPage;
