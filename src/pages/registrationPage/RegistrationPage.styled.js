import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-block;
  color: #4a56e2;
  width: 280px;
  height: 50px;
  padding: 13px 20px;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  display: block;
  cursor: pointer;
  background: #fff;
  margin-bottom: ${props => (props.primary ? '0' : '20px')};
  :hover {
    color: #fff;
    background: var(--color-secondary);
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding-left: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
`;
export const Label = styled.label`
  display: block;
  position: relative;
  width: 280px;
  height: 32px;
  color: #bdbdbd;
  margin-bottom: 40px;
`;

export const Icon = styled('svg')`
  display: block;
  position: absolute;
  left: 10px;
  top: 4px;
`;
export const Wrap = styled('div')`
  display: flex;
  width: 120px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 0 80px 60px 80px;
`;
export const Form = styled('div')`
  box-sizing: border-box;
  width: 320px;
  height: 568px;
  padding: 32px 20px 36px 20px;
`;
export const Title = styled('h1')`
  display: block;
  font-size: 22.5px;
  line-height: 33.75px;
`;
