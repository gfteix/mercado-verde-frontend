import './App.css'

import Header from './components/Header/Header'
//import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <main>
          <SearchPage/>
        </main>
      </div>
    </>
  )
}

export default App
