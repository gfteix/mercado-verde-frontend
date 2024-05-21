import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  product: {
    name: string;
    price: number;
    rating: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="unit-tag">Unidade</div>
      <div className="image-div">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="product-name-div">
            <h3 className="product-name">{product.name}</h3>
          </div>
            <p className="product-price">R${product.price.toFixed(2)}</p>
            <div className="product-rating">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
            </div>
        </div>
        <div className="card-bottom-right">
            <button className="add-to-cart-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
