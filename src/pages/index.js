import React, { Component } from 'react';
import Styles from '../styles/pages/index.scss';
import Navigation from '../partials/navigation';
import Product from '../components/Product';

class Overview extends Component {
  // componentDidMount () {
  //   let beerApi = 'https://api.punkapi.com/v2/beers';
  //   console.log(beerApi);

  //   fetch(beerApi)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (beers) {
  //       JSON.stringify(beers);
  //       beers.filter()
  //     });
  // }

  render () {
    return (
      <React.Fragment>
        <Navigation />
        <ul className={Styles.productList}>
          <Product ProductImage='/static/img/Product/beer.jpg' productName='This' productPrice='42.22' productId='1' />
          <Product ProductImage='/static/img/Product/beer.jpg' productName='Product' productPrice='52.22' productId='2' />
          <Product ProductImage='/static/img/Product/beer.jpg' productName='Is' productPrice='72.22' productId='3' />
          <Product ProductImage='/static/img/Product/beer.jpg' productName='Incomplete' productPrice='122.22' productId='4' />
          <Product ProductImage='/static/img/Product/beer.jpg' productName='Though' productPrice='222.22' productId='5' />
        </ul>
      </React.Fragment>
    );
  }
}

export default Overview;
