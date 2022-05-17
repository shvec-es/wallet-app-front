import styled from 'styled-components';

export const BalanceLabel = styled.span`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--color-balance-label);
`;

export const BalanceSumm = styled.p`
  font-family: 'Circe', sans-serif;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  color: var(--color-black);
`;

export const BalanceCurrencySymbol = styled.span`
  font-weight: 400;
`;

export const BalanceWrapper = styled.div`
  background-color: var(--color-white);
  width: 252px;
  height: 80px;
  border-radius: 30px;
  padding-left: 28px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 326px;
    padding-left: 40px;
  }

  @media (min-width: 1280px) {
    width: 355px;
  }
`;
