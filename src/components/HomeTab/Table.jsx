import {TableMain, TableHeader, TableBody, TableRow, TableHeadCell, TableCell, TableCellColor } from './Table.styled'

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
         {data.map(({id, date, type, category, commentary, moneyAmount, balance}) => (
          <TableRow key ={id}>
            <TableCell>{date}</TableCell>
            <TableCell>{type === true ? '+' : '-'}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{commentary}</TableCell>
            <TableCellColor type={type === true ? "income" : "costs"}>{moneyAmount}</TableCellColor>
            <TableCell>{balance}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </TableMain>
    );
  }
  
  export default Table;