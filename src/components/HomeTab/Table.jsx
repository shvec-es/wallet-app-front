import {
  TableMain,
  TableHeader,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  TableCellColor,
  ButtonDelete,
} from './Table.styled';
import sprite from 'images/sprite.svg';
import { useTranslation } from 'react-i18next';
/*компонент отримує масив для рендеру як по ТЗ*/

function Table({ data }) {
  const { t } = useTranslation();

  return (
    <TableMain>
      <TableHeader>
        <TableRow>
          <TableHeadCell>{t('date')}</TableHeadCell>
          <TableHeadCell>{t('type')}</TableHeadCell>
          <TableHeadCell>{t('category')}</TableHeadCell>
          <TableHeadCell>{t('description')}</TableHeadCell>
          <TableHeadCell>{t('sum')}</TableHeadCell>
          <TableHeadCell>{t('balance')}</TableHeadCell>
        </TableRow>
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
              <TableCell>{category}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCellColor
                type={typeTransaction === true ? 'income' : 'costs'}
              >
                {sum}
              </TableCellColor>
              <TableCell>{balance}</TableCell>
              <TableCell>
                <ButtonDelete>
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
  );
}

export default Table;
