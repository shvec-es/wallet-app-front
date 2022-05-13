import './HomeTabDesktop.css';

function HomeTabDesktop() {
    return ( 
      /*тимчасова hardcode розмітка, коли будуть данні з redux буде логіка та map по розмітці */
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
          <tr className="table__row">
            <td className="table__cell">04.01.19</td>
            <td className="table__cell">-</td>
            <td className="table__cell">Разное</td>
            <td className="table__cell">Подарок жене</td>
            <td className="table__cell costs">300.00</td>
            <td className="table__cell">6 9000.00</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">05.01.19</td>
            <td className="table__cell">+</td>
            <td className="table__cell">Регулярный доход</td>
            <td className="table__cell">
              Бонус за январь
            </td>
            <td className="table__cell income">8 000.00</td>
            <td className="table__cell">14 900.00</td>
          </tr>
          <tr className="table__row">
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
          </tr>
          <tr className="table__row">
            <td className="table__cell">07.01.19</td>
            <td className="table__cell">+</td>
            <td className="table__cell">Нерегулярный доход</td>
            <td className="table__cell">Подарок на др</td>
            <td className="table__cell income">1 000.00</td>
            <td className="table__cell">14870.00</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default HomeTabDesktop;