import './HomeTabDesktop.css';

function HomeTabDesktop({data}) {
  const costsClass = 'table__cell costs'
  const incomeClass = 'table__cell income'
    return ( 
      /*залишив частину  хардкод розмітки щоб потім підігнати дані з бек під макет*/
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__cell">Дата</th>
            <th className="table__cell">Тип</th>
            <th className="table__cell">Категория</th>
            <th className="table__cell">Комментарий</th>
            <th className="table__cell">Сумма</th>
            <th className="table__cell">Баланс</th>
          </tr>
        </thead>
        <tbody className="table__body">
         {data.map(({id, date, type, category, commentary, moneyAmount, balance}) => (
          <tr key ={id} className="table__row">
            <td className="table__cell">{date}</td>
            <td className="table__cell">{type === true ? '+' : '-'}</td>
            <td className="table__cell">{category}</td>
            <td className="table__cell">{commentary}</td>
            <td className={type === true ? incomeClass : costsClass}>{moneyAmount}</td>
            <td className="table__cell">{balance}</td>
          </tr>
           ))}

           
          {/* <tr className="table__row">
            <td className="table__cell">07.01.19</td>
            <td className="table__cell">-</td>
            <td className="table__cell">Машина</td>
            <td className="table__cell">Масло</td>
            <td className="table__cell costs">1000.00</td>
            <td className="table__cell">13 900.00</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">07.01.19</td>
            <td className="table__cell">-</td>
            <td className="table__cell">Продукты</td>
            <td className="table__cell">Овощи на неделю</td>
            <td className="table__cell costs">280.00</td>
            <td className="table__cell">13 870.00</td>
          </tr> */}
        </tbody>
      </table>
    );
  }
  
  export default HomeTabDesktop;