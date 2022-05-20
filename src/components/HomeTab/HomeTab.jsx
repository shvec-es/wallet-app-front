import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {getAllTransactions} from '../../redux/transactions/transactions-selectors';
import {operations} from '../../redux/transactions/transactions-operations';

import TableMobile from './TableMobile';
import Table from './Table';
import ButtonAddTransactions from '../ButtonAddTransactions'
import 'react-toastify/dist/ReactToastify.css';

export default function HomeTab() {
  const {getTransactions} = operations;
  let transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, getTransactions]);

  //костиль з балансом
  const balance = transactions.reduce((acc, item) => {
    if (item.typeTransaction === true) {
      return acc + item.sum;
    } else {
      return acc - item.sum;
    }
  }, 0);

  //сортування за датою транзакції від новіших до старіших
  const sortedTransactions = [...transactions].sort((a, b) => {
    return a.date.localeCompare(b.date);
  });

  return (
    /*логіку роботи Media потрібно буде винести в Dashboard */
    <div>
      <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <TableMobile data={sortedTransactions} balance={balance} /> : <Table data={sortedTransactions} balance={balance} />}
          </div>
        )}
      </Media>
      <ButtonAddTransactions/>
      <ToastContainer />
    </div>
  );
}