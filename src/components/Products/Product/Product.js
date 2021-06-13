import React from 'react';
import './style.css';

const Product = ({ title, image_src, price, features, currency, free_shipping }) => {
  return (
    <div className="product">
      {/* <div className="product__header">
      </div> */}

      <div className="product__section-name">
        <img className="product__avatar" src={image_src} />
      </div>
      <h3 className="product__section-name">
        {title}
      </h3>

      <div className="product__section-info">
        <h2>Price: {currency}{price}</h2>
      </div>
      <p className="product__features">{features} </p>

      {
        free_shipping ? 
        <div className='product__footer'>
          Envio Gratis
        </div>:
         <div className='product__footer'>
       </div>
      }
    </div >
  );

}

export default Product;
