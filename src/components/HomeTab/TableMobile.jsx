import { MobileCard, MobileCardGroup, MobileCardItem, MobileCardItemValue, MobileCardItemColor } from './TableMobile.styled';

function TableMobile({data, balance}) {
  return (
  <>
    {data.map(({_id, date, typeTransaction, category, description, sum}) => (
      <MobileCard key={_id} type={typeTransaction === true ? "income" : "costs"}>
          <MobileCardGroup>
            <MobileCardItem>Дата</MobileCardItem>
            <MobileCardItemValue>{date}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Тип</MobileCardItem>
            <MobileCardItemValue>{typeTransaction === true ? '+' : '-'}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Категория</MobileCardItem>
            <MobileCardItemValue>{category}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Комментарий</MobileCardItem>
            <MobileCardItemValue>{description}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Сумма</MobileCardItem>
            <MobileCardItemColor  type={typeTransaction === true ? "income" : "costs"}>
              {sum}
            </MobileCardItemColor>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Баланс</MobileCardItem>
            <MobileCardItemValue>{typeTransaction === true ? balance+sum : balance-sum}</MobileCardItemValue>
          </MobileCardGroup>
      </MobileCard>
    ) )}
  </>
  );
}

export default TableMobile;