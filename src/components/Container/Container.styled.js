import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-left: 0;
  margin-right: 0;
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
