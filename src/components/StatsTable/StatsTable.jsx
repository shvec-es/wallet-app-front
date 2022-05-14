import {
  Table,
  TableData,
  TableHeader,
  TableRow,
    TableBody,
    ColorMark,
  HeadCell
} from './StatsTable.styled';

function StatsTable({ expences }) {
  return (
    <div>
      <div>table</div>
      <Table>
        <TableHeader>
          <TableRow>
            <HeadCell>Category</HeadCell>
            <HeadCell>Amount</HeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expences.map(expence => (
            <TableRow key={expence.type}>
              <TableData><ColorMark markColor={expence.color}></ColorMark>{expence.type}</TableData>
              <TableData>{expence.amount}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default StatsTable;
