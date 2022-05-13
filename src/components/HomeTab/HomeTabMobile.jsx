import './HomeTabMobile.css';

function HomeTabMobile() {
  return (
    /*тимчасова hardcode розмітка, коли будуть данні з redux буде логіка та map по розмітці */
    <div className="table_mobile">
      <div className="table__card">
        <p className="table__item">Дата</p>
        <p className="table__item_value">04.01.19</p>
      </div>
      <div className="table__card">
        <p className="table__item">Тип</p>
        <p className="table__item_value">-</p>
      </div>
      <div className="table__card">
        <p className="table__item">Категория</p>
        <p className="table__item_value">Разное</p>
      </div>
      <div className="table__card">
        <p className="table__item">Комментарий</p>
        <p className="table__item_value">Подарок жене</p>
      </div>
      <div className="table__card">
        <p className="table__item">Сума</p>
        <p className="table__item_value table__item_costs">300</p>
      </div>
      <div className="table__card">
        <p className="table__item">Баланс</p>
        <p className="table__item_value">6 900.00</p>
      </div>
    </div>
  );
}

export default HomeTabMobile;