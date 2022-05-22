import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 320px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1280px;
  }
`;
