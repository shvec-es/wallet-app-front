import './HomeTabMobile.css';

function HomeTabMobile({data}) {
  const costsClass = 'mobile__item_costs'
  const incomeClass = 'mobile__item_income'

  const tableCosts = 'home_mobile__card home_mobile__card_spend';
  const tableIncome = 'home_mobile__card home_mobile__card_income';
  return (
    /*змінив div та p, на ul-li бо не стилізувалось норм  */
  <>
    {data.map(({id, date, type, category, commentary, moneyAmount, balance, createdAt}) => (
      <div key={id} className={type === true ? tableIncome : tableCosts}>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Дата</li>
            <li className="home_mobile__item_value">{date}</li>
          </ul>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Тип</li>
            <li className="home_mobile__item_value">{type === true ? '+' : '-'}</li>
          </ul>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Категория</li>
            <li className="home_mobile__item_value">{category}</li>
          </ul>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Комментарий</li>
            <li className="home_mobile__item_value">{commentary}</li>
          </ul>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Сумма</li>
            <li className={type === '+' ? incomeClass : costsClass}>
              {moneyAmount}
            </li>
          </ul>
          <ul className="home_mobile__group">
            <li className="home_mobile__item">Баланс</li>
            <li className="home_mobile__item_value">{balance}</li>
          </ul>
      </div>
    ) )}
  </>
  );
}

export default HomeTabMobile;