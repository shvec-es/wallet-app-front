//Зробити раут логінізації
//Зробити форму логінізації
//Зробити лінк на регістрацію

import LoginForm from '../../components/LoginForm/LoginForm';
import loginImg from '../../images/loginImg.svg';
import { Section, ImgWrapper, Img, AppTitle } from './LoginPage.styled';

function LoginPage() {
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
