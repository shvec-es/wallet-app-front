
import styled from "styled-components";


export const FormWrapper = styled.div`
// width:731px;
// height:720px;
padding: 120px 100px;
display:flex;
 justify-content: center;
 margin:0;
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(50px);
`

export const FormBg = styled.div`
width: 533px;
height: 468px;
    padding:60px;
background: #FFFFFF;
border-radius: 20px;
`

export const AppTitleWrapper = styled.div`
display:flex;
justify-content:center;
// padding-top:40px;
`

export const AppTitle = styled.h1`
margin:0;
margin-left:20px;
margin-bottom:60px;

font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 1.5;
display: flex;
align-items: center;

color: #000000;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Label = styled.label`
  display: flex;
 border-bottom: 1px solid #E0E0E0;
  margin-bottom: 20px;

`;

export const Input = styled.input`
  display: block;
  width: 410px;
  height:32px;
margin-left:20px;
  outline: 0;

  color: #212529;
  background-color: #fff;
  border: 0;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder{


font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 1.5;



  }
`;

export const InputIcon = styled.svg`
padding-left:10px;
color: #E0E0E0
`

export const SignInBtn = styled.button`
width: 300px;
height: 50px;
margin-top:35px;

background: #24CCA7;
border-radius: 20px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 1.5;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
border:transparent;
 cursor: pointer;

color: #FFFFFF;
`

export const SignUpBtn = styled.div`
width: 300px;
height: 50px;
// padding-top:13px;
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
background: #FFFFFF;
border: 1px solid #4A56E2;
border-radius: 20px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 1.5;

letter-spacing: 0.1em;
text-transform: uppercase;

color: #4A56E2;
 cursor: pointer;
`

export const LinkText = styled.span`

`