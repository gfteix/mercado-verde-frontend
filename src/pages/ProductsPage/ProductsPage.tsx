import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAuth } from "../../contexts/auth";
import { getProductImage } from "../../utils/image-finder";

import "./ProductsPage.css";
import { Product } from "../../types/api/product.interface";

const ProductPage = () => {
  const { accessToken } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function buildProducts() {
      const response = await getProducts(accessToken as string);

      const productList = response.products.map((p) => {
        return {
          ...p,
          rating: 5,
          image: getProductImage(p.name),
        };
      });

      setProducts(productList);
    }

    buildProducts();
  }, [accessToken]);

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
