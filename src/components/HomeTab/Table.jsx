import {TableMain, TableHeader, TableBody, TableRow, TableHeadCell, TableCell, TableCellColor } from './Table.styled'

/*компонент отримує масив для рендеру як по ТЗ*/

function Table({data, balance}) {
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
         {data.map(({_id, date, typeTransaction, category, description, sum}) => (
          <TableRow key ={_id}>
            <TableCell>{date}</TableCell>
            <TableCell>{typeTransaction === true ? '+' : '-'}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCellColor type={typeTransaction === true ? "income" : "costs"}>{sum}</TableCellColor>
            <TableCell>{typeTransaction === true ? balance+sum : balance-sum}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </TableMain>
    );
  }
  
  export default Table;