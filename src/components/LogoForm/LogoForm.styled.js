import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: start;

    margin-left: 114px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin: 123px 50px 78px 70px;
  }
`;
export const Text = styled.p`
  width: 187px;
  height: 45px;
  margin-left: 40px;
  font-family: 'Poppins';
  font-size: 30px;
  line-height: 1.5;
  text-align: center;

  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;
