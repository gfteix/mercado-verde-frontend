import ProductCard from "../../components/ProductCard/ProductCard";
import { getProductImage } from "../../utils/image-finder";

import "./ProductsPage.css";

const products = [
  { name: "Laranja", price: 1.0, rating: 5, image: getProductImage("laranja") },
  { name: "Kiwi", price: 1.0, rating: 4, image: getProductImage("kiwi") },
  {
    name: "Pimentão",
    price: 5.0,
    rating: 5,
    image: getProductImage("pimentao"),
  },
  {
    name: "Limão Siciliano",
    price: 2.0,
    rating: 5,
    image: getProductImage("limaoSiciliano"),
  },
  { name: "Alface", price: 2.5, rating: 4, image: getProductImage("alface") },
];

const ProductPage = () => {
  return (
    <main className="product-page-container">
      <div className="title-container">
        <h2>Produtos</h2>
      </div>
      <div className="content-container">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
