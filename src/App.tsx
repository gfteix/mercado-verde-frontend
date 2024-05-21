
import './App.css'
import ProductCard from './components/product-card/ProductCard'
import laranja from './assets/laranja.jpg'
import kiwi from './assets/kiwi.jpg'
import limaoSiciliano from './assets/limao_siciliano.jpg'
import pimentao from './assets/pimentao.jpg'
import alface from './assets/alface.jpg'

import Header from './components/header/Header'

function App() {
  const products = [
    { name: 'Laranja', price: 1.00, rating: 5, image: laranja },
    { name: 'Kiwi', price: 1.00, rating: 4, image: kiwi },
    { name: 'Pimentão', price: 5.00, rating: 5, image: pimentao },
    { name: 'Limão Siciliano', price: 2.00, rating: 5, image: limaoSiciliano },
    { name: 'Alface', price: 2.50, rating: 4, image: alface },
  ]

  return (
    <>
      <div className="App">
        <Header></Header>
        <main>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}   
        </main>
      </div>
    </>
  )
}

export default App
