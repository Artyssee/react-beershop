import React, { Component } from 'react';
import Styles from './product.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

class Product extends Component {
  render () {
    return (
      <Link href={`/singleproject/?title=${this.props.productName}`}>
        <a id={this.props.ProductId} className={Styles.ProductContainer}>
          <img className={Styles.ProductImage} src={this.props.ProductImage} alt='one' />
          <div className={Styles.ProductInfoContainer}>
            <h5 className={Styles.ProductHeading}>{this.props.productName}</h5>
            <p className={Styles.productText}>{this.props.productPrice}</p>
          </div>
        </a>
      </Link>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.string,
  ProductId: PropTypes.number,
  ProductImage: PropTypes.string
};

export default Product;
