
import LoginForm from '../../components/LoginForm/LoginForm';
import loginImg from '../../images/loginImg.svg';
import {Container} from 'components'
import { Section, ImgWrapper, Img, AppTitle } from './LoginPage.styled';

function LoginPage() {
  return (
      <Section>
          {/* <Container> */}
               <ImgWrapper>
           <Img src={loginImg} alt="loginImg"  />
      <AppTitle>Finance App</AppTitle>
          </ImgWrapper>
     
      <LoginForm />
        
      {/* </Container> */}
  
       
    </Section>
  );
}

export default LoginPage;