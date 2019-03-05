import React from 'react';
import Link from 'next/link';
import Styles from './navigation.scss';

function Navigation () {
  return (
    <nav className={Styles.mainNavigation}>
      <ul className={Styles.mainNavigationList}>
        <li className={Styles.mainNavigationListItem}>
          <Link href='/'>
            <a className={Styles.mainNavigationListLink}>Overview</a>
          </Link>
        </li>
        <li className={Styles.mainNavigationListItem}>
          <Link href='/shoppingcart'>
            <a className={Styles.mainNavigationListLink}>Shoppingcart</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
