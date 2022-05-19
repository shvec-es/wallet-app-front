import { useLocation } from 'react-router';
import {
  BalanceLabel,
  BalanceSumm,
  BalanceWrapper,
  BalanceCurrencySymbol,
} from './Balance.styled';
import { useTranslation } from 'react-i18next';

export default function Balance() {
  const location = useLocation();
  const balance = 23581;
  const isHome = location.pathname === '/home' || '/diagram';
  const { t } = useTranslation();
  const formattedBalance = (+balance)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$& ');

  return (
    isHome && (
      <BalanceWrapper>
        <BalanceLabel>{t('balance')}</BalanceLabel>
        <BalanceSumm>
          <BalanceCurrencySymbol>&#8372;&nbsp;</BalanceCurrencySymbol>
          {formattedBalance}
        </BalanceSumm>
      </BalanceWrapper>
    )
  );
}
