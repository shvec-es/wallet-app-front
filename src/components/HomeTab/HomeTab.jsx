import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  getAllTransactions,
  getIsLoading,
} from '../../redux/transactions/transactions-selectors';
import { operations } from '../../redux/transactions/transactions-operations';

import TableMobile from './TableMobile';
import Table from './Table';
import ButtonAddTransactions from '../ButtonAddTransactions';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'components/Loader';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function HomeTab() {
  const { fetchTransactions } = operations;
  const transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  // useEffect(() => {
  //   const getTransactions = async () => dispatch(fetchTransactions());
  //   getTransactions();
  // }, [dispatch, fetchTransactions]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Media query="(max-width: 767px)">
            <TableMobile data={transactions} />
          </Media>
          <Media query="(min-width: 768px">
            <Table data={transactions} />
          </Media>
        </>
      )}

      {/* <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <TableMobile data={transactions} /> : <Table data={transactions} />}
          </div>
      </Media> */}
      <ButtonAddTransactions />
      <ToastContainer />
    </div>
  );
}
