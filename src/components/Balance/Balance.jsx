import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { balance as balanceSelector } from '../../redux/balance/balance-selectors';
import {
  BalanceLabel,
  BalanceSumm,
  BalanceWrapper,
  BalanceCurrencySymbol,
} from './Balance.styled';
import { useTranslation } from 'react-i18next';
import { fetchBalance } from '../../redux/balance/balance-operations';
//import { getAllTransactions } from 'redux/transactions/transactions-selectors';




export default function Balance() {
  const location = useLocation();
  const balance = useSelector(balanceSelector);
  const dispatch = useDispatch();
  const isHome = location.pathname === '/home' || '/diagram';
  const { t } = useTranslation();
  //const allTransations = useSelector(getAllTransactions);

    //--------------------------------
  useEffect(
    () => {
      dispatch(fetchBalance);
    },
    //[
    //dispatch, allTransations
    //],
  );
  //--------------------------------
  
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
