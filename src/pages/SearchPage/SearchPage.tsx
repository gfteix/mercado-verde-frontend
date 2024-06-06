import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./SearchPage.css";
import { Category, Product } from "../../types";
import { getCategories } from "../../api/categories";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const SearchPage = () => {
  const { accessToken } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function buildCategories() {
      const localCategories = localStorage.getItem('categories')

      if (localCategories) {
        setCategories(JSON.parse(localCategories))
      } else {
        const response = await getCategories(accessToken as string);

        setCategories(response.categories);
        localStorage.setItem('categories', JSON.stringify(categories));
      }
    }

    async function buildProducts() {
      const localProducts = localStorage.getItem('products')

      if (localProducts) {
        setProducts(JSON.parse(localProducts))
      } else {
        const response = await getProducts(accessToken as string);

        const productList = response.products.map((p) => {
          return {
            ...p,
            rating: 5
          };
        });
  
        setProducts(productList);
        localStorage.setItem('products', JSON.stringify(productList));
      }
    }

    buildProducts();
    buildCategories();
  }, [accessToken]);

  return (
    <main className="search-page-container">
      <div className="title-container">
        <h2>Pesquisa</h2>
      </div>
      <div className="content-container">
        <div className="input-container">
          <input placeholder="Busca por nome"></input>
        </div>
        <div className="categories-container">
          <br></br>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}

          <br></br>
          {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        <br></br>

        </div>
      </div>
    </main>
  );
};

export default SearchPage;
