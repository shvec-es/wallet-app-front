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
  let balance = 0

  transactions.forEach(item => {
    // console.log('sum',item.sum);
    item.typeTransaction === true ? balance = item.sum + balance : balance = balance - item.sum;
  })

  return (
    /*логіку роботи Media потрібно буде винести в Dashboard */
    <div>
      <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <TableMobile data={transactions} balance={balance} /> : <Table data={transactions} balance={balance} />}
          </div>
        )}
      </Media>
      <ButtonAddTransactions/>
      <ToastContainer />
    </div>
  );
}