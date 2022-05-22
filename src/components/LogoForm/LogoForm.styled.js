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
    margin: 153px 30px 78px 50px;
  }
`;
export const Text = styled.p`
  width: text-fit-content;
  height: 45px;
  margin-left: 40px;
  font-family: 'Poppins';
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  text-transform: capitalize;

  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const Icon = styled.svg`
  width: 296px;
  height: 270px;

  @media screen and (min-width: 1280px) {
    width: 452px;
    height: 413px;
  }
`;
