import Media from 'react-media';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllTransactions} from '../../redux/transactions/transactions-selectors';
import {operations} from '../../redux/transactions/transactions-operations';

import HomeTabMobile from './HomeTabMobile';
import HomeTabDesktop from './HomeTabDesktop';

export default function HomeTab() {
  const {getTransactions} = operations;
  let transactions = useSelector(getAllTransactions);
  const dispatch = useDispatch();
console.log(transactions);

  // transactions.map(({id, date, type, category, commentary, moneyAmount, balance, createdAt}) => {
  //   let parsedType
  //   if(type === true) {
  //     parsedType = '+'
  //   } else {
  //     parsedType = '-'
  //   }
  //   const obj = {
  //     id,
  //     date,
  //     type: parsedType,
  //     category,
  //     commentary,
  //     moneyAmount,
  //     balance,
  //     createdAt
  //   };
  //   return obj;
  //   },
  // )

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch, getTransactions]);

  return (
    /*логіку роботи Media потрібно буде винести в Dashboard */
    /*тут залишиться тільки компонент HomeTab(в ньому Table) та логіка фільтрації */
    <div>
      <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <HomeTabMobile data={transactions}/> : <HomeTabDesktop data={transactions}/>}
          </div>
        )}
      </Media>
    </div>
  );
}