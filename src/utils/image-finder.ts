import laranjaImage from '../assets/laranja.jpg'
import kiwiImage from '../assets/kiwi.jpg'
import limaoSicilianoImage from '../assets/limao_siciliano.jpg'
import pimentaoImage from '../assets/pimentao.jpg'
import alfaceImage from '../assets/alface.jpg'

import caulesImage from '../assets/caules.svg'
import floresImage from '../assets/flores.svg'
import frutasImage from '../assets/frutas.svg'
import legumesImage from '../assets/legumes.svg'
import tuberculosImage from '../assets/tuberculos.svg'
import verdurasImage from '../assets/verduras.svg'

function getProductImage(productName: string): string {
    const mapper : {[key: string]: string} = {
        'laranja': laranjaImage,
        'kiwi': kiwiImage,
        'limaosiciliano': limaoSicilianoImage,
        'pimentao': pimentaoImage,
        'alface': alfaceImage
    }

    return mapper[productName.toLowerCase()] ?? ''
}

function getCategoryImage(categoryName: string): string {
    const mapper : {[key: string]: string} = {
        'caules': caulesImage,
        'flores': floresImage,
        'frutas': frutasImage,
        'legumes': legumesImage,
        'tuberculos': tuberculosImage,
        'verduras': verdurasImage
    }

    return mapper[categoryName.toLowerCase()] ?? ''
}

export {
    getProductImage,
    getCategoryImage
}