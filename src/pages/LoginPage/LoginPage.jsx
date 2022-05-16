//Зробити раут логінізації
//Зробити форму логінізації
//Зробити лінк на регістрацію

import LoginForm from '../../components/LoginForm/LoginForm';
import loginImg from '../../images/loginImg.svg'
import {Section, Img} from './LoginPage.styled'



function LoginPage() { 
    return (
        <Section>
          
                <Img src={loginImg} alt="loginImg" width='435px' height='420px' />

            <LoginForm/>
        </Section>
     )
}

export default LoginPage;