import { useDispatch } from 'react-redux';
import {
  TableMain,
  TableHeader,
  TableHeaderRow,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  TableCellColor,
  ButtonDelete,
  NoTransactions,
} from './Table.styled';
import sprite from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';
import { operations } from '../../redux/transactions/transactions-operations';
/*компонент отримує масив для рендеру як по ТЗ*/

function Table({ data }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onDelete = _id => {
    dispatch(operations.deleteTransaction(_id));
  };

  return (
    <>
      {data.length === 0 ? (
        <NoTransactions>You have no transactions yet.</NoTransactions>
      ) : (
        <TableMain>
          <TableHeader>
            <TableHeaderRow>
              <TableHeadCell>{t('date')}</TableHeadCell>
              <TableHeadCell>{t('type')}</TableHeadCell>
              <TableHeadCell>{t('category')}</TableHeadCell>
              <TableHeadCell>{t('description')}</TableHeadCell>
              <TableHeadCell>{t('sum')}</TableHeadCell>
              <TableHeadCell>{t('balance')}</TableHeadCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {data.map(
              ({
                _id,
                date,
                typeTransaction,
                category,
                description,
                sum,
                balance,
              }) => (
                <TableRow key={_id}>
                  <TableCell>{date}</TableCell>
                  <TableCell>{typeTransaction === true ? '+' : '-'}</TableCell>
                  <TableCell>{category ?? 'Income'}</TableCell>
                  <TableCell>{description ?? '-'}</TableCell>
                  <TableCellColor
                    type={typeTransaction === true ? 'income' : 'costs'}
                  >
                    {sum}
                  </TableCellColor>
                  <TableCell>{balance}</TableCell>
                  <TableCell>
                    <ButtonDelete onClick={() => onDelete(_id)}>
                      <svg width="16" height="16">
                        <use href={`${sprite}#close`} />
                      </svg>
                    </ButtonDelete>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </TableMain>
      )}
    </>
  );
}

export default Table;
