import laranjaImage from "../assets/laranja.jpg";
import kiwiImage from "../assets/kiwi.jpg";
import limaoSicilianoImage from "../assets/limao_siciliano.jpg";
import pimentaoImage from "../assets/pimentao.jpg";
import alfaceImage from "../assets/alface.jpg";
import cebolaImage from "../assets/cebola.jpg";

import caulesImage from "../assets/caules.jpg";
import floresImage from "../assets/flores.jpg";
import frutasImage from "../assets/frutas.jpg";
import legumesImage from "../assets/legumes.jpg";
import tuberculosImage from "../assets/tuberculos.jpg";
import verdurasImage from "../assets/verduras.jpg";

function getProductImage(productName: string): string {
  const mapper: { [key: string]: string } = {
    laranja: laranjaImage,
    kiwi: kiwiImage,
    "limão siciliano": limaoSicilianoImage,
    pimentão: pimentaoImage,
    alface: alfaceImage,
    cebola: cebolaImage,
  };

  return mapper[productName.toLowerCase()] ?? "";
}

function getCategoryImage(categoryName: string): string {
  const mapper: { [key: string]: string } = {
    caules: caulesImage,
    flores: floresImage,
    frutas: frutasImage,
    legumes: legumesImage,
    tuberculos: tuberculosImage,
    verduras: verdurasImage,
  };

  return mapper[categoryName.toLowerCase()] ?? "";
}

export { getProductImage, getCategoryImage };
