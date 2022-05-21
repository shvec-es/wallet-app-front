import { useEffect, useState } from 'react';
import getCurrency from 'services/privat-bank-api';
import PropTypes from 'prop-types';
import Media from 'react-media';
import {
  CurrencyTable,
  TableHeader,
  HeadCell,
  TableBody,
  TableRow,
  TableData,
  TableFooter,
} from './Currency.styled';
import { useTranslation } from 'react-i18next';
import { TailSpin } from 'react-loader-spinner';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [status, setStatus] = useState('idle');
  const { t } = useTranslation();

  useEffect(() => {
    const localCurrency = JSON.parse(localStorage.getItem('currency'));
    const currencyTime = JSON.parse(localStorage.getItem('currency_time'));

    async function fetchCurrency() {
      setStatus('pending');

      try {
        const response = await getCurrency();

        if (response.ok) {
          const data = await response.json();

          localStorage.setItem('currency', JSON.stringify(data));
          localStorage.setItem('currency_time', Date.now());

          setCurrency(data);
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    }

    const condition = () => {
      setStatus('pending');

      if (
        (localCurrency && currencyTime) ||
        Date.now() - currencyTime < 3600000
      ) {
        setCurrency(localCurrency);
        setStatus('success');
      } else {
        fetchCurrency();
      }
    };

    condition();
  }, []);

  return (
    <>
      {status === 'pending' && (
        <TailSpin
          ariaLabel="loading-indicator"
          color="var(--color-primary)"
          height={100}
          width={100}
        />
      )}
      {status === 'success' && (
        <CurrencyTable>
          <TableHeader>
            <TableRow>
              <HeadCell>{t('ccy')}</HeadCell>
              <HeadCell>{t('buy')}</HeadCell>
              <HeadCell>{t('sale')}</HeadCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currency &&
              currency.map(({ ccy, buy, sale }) => (
                <TableRow key={ccy}>
                  <TableData>{ccy}</TableData>
                  <TableData>{parseFloat(buy).toFixed(2)}</TableData>
                  <TableData>{parseFloat(sale).toFixed(2)}</TableData>
                </TableRow>
              ))}
          </TableBody>
          <Media query="(min-width: 1280px)">
            <TableFooter></TableFooter>
          </Media>
        </CurrencyTable>
      )}
    </>
  );
};

Currency.propTypes = {
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string.isRequired,
      buy: PropTypes.number.isRequired,
      sale: PropTypes.number.isRequired,
    }),
  ),
};

export default Currency;
