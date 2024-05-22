import CategoryCard from "../../components/CategoryCard/CategoryCard";
import CaulesImage from '../../assets/caules.svg'
import FloresImage from '../../assets/flores.svg'
import FrutasImage from '../../assets/frutas.svg'
import LegumesImage from '../../assets/legumes.svg'
import TuberculosImage from '../../assets/tuberculos.svg'
import VerdurasImage from '../../assets/verduras.svg'
import './SearchPage.css'

const categories = [
  { name: 'Caules', image: CaulesImage },
  { name: 'Flores', image: FloresImage },
  { name: 'Frutas', image: FrutasImage },
  { name: 'Legumes', image: LegumesImage },
  { name: 'Tubérculos', image: TuberculosImage },
  { name: 'Verduras', image: VerdurasImage },
]

const SearchPage = () => {
  return (
    <main>
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
  );
};

export default SearchPage;
