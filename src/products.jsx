import guia1 from './assets/img/guia1.jpg';
import guia2 from './assets/img/guia2.png';
import guia3 from './assets/img/guia3.jpg';
import libro1 from './assets/img/libro1.jpg';
import libro2 from './assets/img/libro2.jpg';
import libro3 from './assets/img/libro3.jpg';


const products = [
    {
      id:1,
      img: guia1 ,
      name: 'Guia educativa 1',
      description: 'Motivacion, autosuperacion',
      category:'Psicologia',
      price: 6500,
      stock: 30,
    },
    {
      id:2,
      img: guia2 ,
      name: 'Guia educativa 2',
      description: 'Motivacion, autosuperacion',
      category:'Psicologia',
      price: 6500,
      stock: 30,
    },
    {
      id:3,
      img: guia3,
      name: 'Guia educativa 3',
      description: 'Motivacion, autosuperacion',
      category:'Psicologia',
      price: 6500,
      stock: 35,
    },
    {
      id:4,
      img: libro1 ,
      name: 'Libro digital 1',
      description: 'Educacion  financiera digital',
      category:'Economia',
      price: 10500,
      stock: 18,
    },
    {
      id:5,
      img: libro2 ,
      name: 'Libro digital 2',
      description: 'Educacion  financiera digital',
      category:'Economia',
      price: 9500,
      stock: 18,
    },
    {
      id:6,
      img: libro3,
      name: 'Libro digital 3',
      description: 'Educacion financiera digital',
      category:'Economia',
      price: 11500,
      stock: 19,
    },
  ];
  
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id.toString() === productId))
        }, 500)
    })
}

export const getProductByCategory = (prodCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === prodCategory))
        }, 500)
    })
}