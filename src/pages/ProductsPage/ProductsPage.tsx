import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./ProductsPage.css";
import { Category, Product } from "../../types";
import { getCategories } from "../../api/categories";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsPage = () => {
  const { accessToken } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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

  const filteredProducts = products.filter(product => {
    const matchesSearchQuery = searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
    const matchesCategory = selectedCategory ? product.category.name === selectedCategory : true;
    return matchesCategory && matchesSearchQuery;
  });

  const handleCategoryClick = (name: string) => {
    console.log(selectedCategory === name)
    if (selectedCategory === name) {
      setSelectedCategory("")
    } else {
      setSelectedCategory(name)
    }
  }

  return (
    <main className="products-page-container">
      <div className="title-container">
        <h2>Produtos</h2>
      </div>
      <div className="content-container">
        <div className="input-container">
          <input placeholder="Busca por nome" onChange={(e) => setSearchQuery(e.target.value)}></input>
        </div>
        <div className="categories-container">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} selectedCategory={selectedCategory} onClick={() => handleCategoryClick(category.name)} />
          ))}
        </div>
        <div className="products-container">
          {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      </div>
    </main>
  );
};

export default ProductsPage;
