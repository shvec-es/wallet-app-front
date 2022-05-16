import { MobileCard, MobileCardGroup, MobileCardItem, MobileCardItemValue, MobileCardItemColor } from './HomeTabMobile.styled';

function HomeTabMobile({data}) {
  return (
  <>
    {data.map(({id, date, type, category, commentary, moneyAmount, balance, createdAt}) => (
      <MobileCard key={id} type={type === true ? "income" : "costs"}>
          <MobileCardGroup>
            <MobileCardItem>Дата</MobileCardItem>
            <MobileCardItemValue>{date}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Тип</MobileCardItem>
            <MobileCardItemValue>{type === true ? '+' : '-'}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Категория</MobileCardItem>
            <MobileCardItemValue>{category}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Комментарий</MobileCardItem>
            <MobileCardItemValue>{commentary}</MobileCardItemValue>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Сумма</MobileCardItem>
            <MobileCardItemColor  type={type === true ? "income" : "costs"}>
              {moneyAmount}
            </MobileCardItemColor>
          </MobileCardGroup>
          <MobileCardGroup>
            <MobileCardItem>Баланс</MobileCardItem>
            <MobileCardItemValue>{balance}</MobileCardItemValue>
          </MobileCardGroup>
      </MobileCard>
    ) )}
  </>
  );
}

export default HomeTabMobile;