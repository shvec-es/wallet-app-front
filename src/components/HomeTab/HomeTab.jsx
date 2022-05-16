import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllTransactions} from '../../redux/transactions/transactions-selectors';
import {operations} from '../../redux/transactions/transactions-operations';

import TableMobile from './TableMobile';
import Table from './Table';

export default function HomeTab() {
  const {getTransactions} = operations;
  let transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();
// console.log(transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, getTransactions]);

  return (
    /*логіку роботи Media потрібно буде винести в Dashboard */
    <div>
      <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <TableMobile data={transactions}/> : <Table data={transactions}/>}
          </div>
        )}
      </Media>
    </div>
  );
}