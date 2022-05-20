import {TableMain, TableHeader, TableBody, TableRow, TableHeadCell, TableCell, TableCellColor, ButtonDelete } from './Table.styled'
import sprite from 'images/sprite.svg';
/*компонент отримує масив для рендеру як по ТЗ*/

function Table({data}) {
    return ( 
      <TableMain>
        <TableHeader>
          <TableRow>
            <TableHeadCell>Дата</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Категория</TableHeadCell>
            <TableHeadCell>Комментарий</TableHeadCell>
            <TableHeadCell>Сумма</TableHeadCell>
            <TableHeadCell>Баланс</TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
         {data.map(({_id, date, typeTransaction, category, description, sum, balance}) => (
          <TableRow key ={_id}>
            <TableCell>{date}</TableCell>
            <TableCell>{typeTransaction === true ? '+' : '-'}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCellColor type={typeTransaction === true ? "income" : "costs"}>{sum}</TableCellColor>
            <TableCell>{balance}</TableCell>
            <TableCell><ButtonDelete><svg width="16" height="16">
          <use href={`${sprite}#close`} />
        </svg></ButtonDelete></TableCell>
          </TableRow>
           ))}
        </TableBody>
      </TableMain>
    );
  }
  
  export default Table;