import styled from 'styled-components';

export const Section = styled.section`
  @media (max-width: 767px) {
    background-color: #fff;
  }

  @media (min-width: 1280px) {
    // max-height:720px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    padding: 120px 0px 77px 75px;
    margin-right: 38px;
  }
`;

export const Img = styled.svg`
  @media (min-width: 768px) {
    width: 260px;
    height: 250px;

    margin-bottom: 50px;
    padding-top: 60px;
  }
  @media (min-width: 1280px) {
    width: 435px;
    height: 420px;
    margin: 0;
    padding: 0;
  }
`;

export const AppTitle = styled.h1`
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  text-transform: capitalize;

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (min-width: 1280px) {
    margin: 0;
    margin-top: 30px;
  }
`;
