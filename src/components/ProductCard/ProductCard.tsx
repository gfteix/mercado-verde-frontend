import React from "react";
import "./ProductCard.css";
import { useCart } from "../../contexts/cart";
import { Product } from "../../api/products";

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="unit-tag">Unidade</div>
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <div className="product-name-container">
            <h3 className="product-name">{product.name}</h3>
          </div>
          <p className="product-price">R${product.price.toFixed(2)}</p>
          <div className="product-rating">
            {"★".repeat(product.rating as number)}
            {"☆".repeat(5 - product.rating!)}
          </div>
        </div>
        <div className="card-bottom-right">
          <button
            onClick={() => addToCart(product)}
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
