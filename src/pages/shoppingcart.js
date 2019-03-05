import React from 'react';
import '../styles/pages/index.scss';
import App from '../components/App';
import Navigation from '../partials/navigation';

function shoppingCart () {
  return (
    <React.Fragment>
      <Navigation />
      <App />
    </React.Fragment>
  );
}

export default shoppingCart;
