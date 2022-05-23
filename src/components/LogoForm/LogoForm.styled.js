import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin: 0;
    padding: 123px 30px 78px 66px;
  }
`;
export const Text = styled.p`
  margin-left: 30px;
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  text-transform: capitalize;

  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;

export const Icon = styled.svg`
  width: 274px;
  height: 250px;

  @media screen and (min-width: 1280px) {
    width: 410px;
    height: 413px;
  }
`;
