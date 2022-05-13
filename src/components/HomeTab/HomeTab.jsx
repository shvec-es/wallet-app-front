import Media from 'react-media';
import HomeTabMobile from './HomeTabMobile';
import HomeTabDesktop from './HomeTabDesktop';

export default function HomeTab() {
  return (
    /*логіку роботи Media потрібно буде винести в Dashboard */
    /*тут залишиться тільки компонент HomeTab(в ньому Table) та логіка фільтрації */
    <div>
      <Media  queries={{
          isMobile: '(max-width: 767px)',
        }}
      >
        {({isMobile}) => (
          <div>
              {isMobile ? <HomeTabMobile /> : <HomeTabDesktop />}
          </div>
        )}
      </Media>
    </div>
  );
}