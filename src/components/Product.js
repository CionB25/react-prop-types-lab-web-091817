// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const {name, producer, hasWatermark, color, weight} = this.props
    return (
      <div>
        <h1>Product Name: {name}</h1>
        <p>Product Info</p>
        <p>Manufacturer: {producer}</p>
        <p>Watermark: {hasWatermark}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
}
export default Product;
