import BlankContainer from '../../components/BlankContainer/BlankContainer';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProductImage } from '../../utils/image-finder';

import './ProductPage.css'

const products = [
  { name: 'Laranja', price: 1.00, rating: 5, image: getProductImage('laranja') },
  { name: 'Kiwi', price: 1.00, rating: 4, image: getProductImage('kiwi') },
  { name: 'Pimentão', price: 5.00, rating: 5, image: getProductImage('pimentao') },
  { name: 'Limão Siciliano', price: 2.00, rating: 5, image: getProductImage('limaoSiciliano') },
  { name: 'Alface', price: 2.50, rating: 4, image: getProductImage('alface') },
]

const ProductPage = () => {
  return (
    <>
    <Header></Header>
    <BlankContainer >
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
    </BlankContainer>
    </>
  );
};

export default ProductPage;
