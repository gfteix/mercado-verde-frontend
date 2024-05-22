import ProductCard from '../../components/ProductCard/ProductCard';
import laranja from '../../assets/laranja.jpg'
import kiwi from '../../assets/kiwi.jpg'
import limaoSiciliano from '../../assets/limao_siciliano.jpg'
import pimentao from '../../assets/pimentao.jpg'
import alface from '../../assets/alface.jpg'
import './ProductPage.css'

const products = [
  { name: 'Laranja', price: 1.00, rating: 5, image: laranja },
  { name: 'Kiwi', price: 1.00, rating: 4, image: kiwi },
  { name: 'Pimentão', price: 5.00, rating: 5, image: pimentao },
  { name: 'Limão Siciliano', price: 2.00, rating: 5, image: limaoSiciliano },
  { name: 'Alface', price: 2.50, rating: 4, image: alface },
]

const ProductPage = () => {
  return (
    <main>
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
