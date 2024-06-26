import React from "react";
import "./ProductCard.css";
import { formatProductPrice } from "../../utils/price-formatter";
import { Product } from "../../types";

export interface ProductCardProps {
  product: Product;
  handleAddToCart(product: Product): void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
}) => {
  return (
    <div className="product-card">
      <div className="unit-tag">Unidade</div>
      <div className="image-container">
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="product-name-container">
            <h3 className="product-name">{product.name}</h3>
          </div>
          <p className="product-price">{formatProductPrice(product.price)}</p>
          <div className="product-rating">
            {"★".repeat(product.rating as number)}
            {"☆".repeat(5 - product.rating!)}
          </div>
        </div>
        <div className="card-bottom-right">
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
