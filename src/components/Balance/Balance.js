import { useLocation } from 'react-router';
import {
  BalanceLabel,
  BalanceSumm,
  BalanceWrapper,
  BalanceCurrenceSymbol,
} from './Balance.styled';

export default function Balance() {
  const location = useLocation();
  const balance = 23581;
  const isHome = location.pathname === '/home';

  const formattedBalance = (+balance)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');

  console.log(location);
  console.log(isHome);

  return (
    <BalanceWrapper>
      <BalanceLabel>Your balance</BalanceLabel>
      <BalanceSumm>
        <BalanceCurrenceSymbol>&#8372;&nbsp;</BalanceCurrenceSymbol>
        {formattedBalance}
      </BalanceSumm>
    </BalanceWrapper>
  );
}
