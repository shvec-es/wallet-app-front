import Media from 'react-media';
import { LogoForm } from 'components';
import { RegistrationForm, Container } from 'components';
import { WrapperPage, WrapperForm } from './RegistrationPage.styled';

function RegistrationPage() {
  return (
    <>
       <Container>
      <WrapperPage>
        <div>
          <Media query="(min-width: 768px)">
            <LogoForm />
          </Media>
        </div>

        <WrapperForm>
          <RegistrationForm />
        </WrapperForm>
        </WrapperPage>
        </Container>
    </>
  );
}

export default RegistrationPage;
