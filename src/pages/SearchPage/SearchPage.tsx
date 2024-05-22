import CategoryCard from "../../components/CategoryCard/CategoryCard";
import './SearchPage.css'
import Header from "../../components/Header/Header";
import { getCategoryImage } from "../../utils/image-finder";
import BlankContainer from "../../components/BlankContainer/BlankContainer";

const categories = [
  { name: 'Caules', image: getCategoryImage('caules') },
  { name: 'Flores', image: getCategoryImage('flores') },
  { name: 'Frutas', image: getCategoryImage('frutas') },
  { name: 'Legumes', image: getCategoryImage('legumes') },
  { name: 'Tubérculos', image: getCategoryImage('tuberculos') },
  { name: 'Verduras', image: getCategoryImage('verduras') },
]

const SearchPage = () => {
  return (
    <>
      <Header></Header>
      <BlankContainer >
        <main className="search-page-container">
          <div className="title-container">
            <h2>Pesquisa</h2>
          </div>
          <div className="content-container">
            <div className="input-container">
              <input placeholder="Busca por nome"></input>
            </div>
            <div className="categories-container">
              {categories.map((category, index) =>  (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>
        </main>
    </BlankContainer >
    </>
  );
};

export default SearchPage;
