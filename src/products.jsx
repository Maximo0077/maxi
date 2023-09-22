import acer from './assets/img/acer.webp';
import asus from './assets/img/asusrog.webp';
import iphone from './assets/img/iphone13.jpg';
import mac from './assets/img/macbook.webp';
import redmi from './assets/img/redmi.jpg';
import samsung from './assets/img/smart-tv.webp';


const products = [
    {
      id:1,
      img: acer,
      name: 'Laptop Acer XYZ',
      description: 'Potente laptop para tareas exigentes.',
      price: 240.999,
      category:'Laptop',
      stock: 10,
      details: 'Detalles de la laptop Acer XYZ es una potente laptop de trabajo donde tambien podrás jugar algunos juegos básicos, usar aplicaciones de Adobe y demás mientras no sea muy demandante.'
    },
    {
      id:2,
      img: asus,
      name: 'Laptop Asus Rog Strix Ryzen 7 5800u + RTX 3080',
      description: 'Potente laptop para Gaming.',
      price: 689.999,
      category:'Laptop',
      stock: 5,
      details: 'Una potente notebook gamer. Jugá donde quieras, stremeá, trabajá por varios años.'
    },
    {
      id:3,
      img: mac,
      name: 'Macbook Pro M1',
      description: 'Potente laptop para diseño.',
      price: 899.999,
      category:'Laptop',
      stock: 16,
      details: 'Una laptop apple, especial para diseñadores y creadores de contenido que busquen un estilo mas reservado y un sistema operativo mas agradable para este tipo de trabajo.'
    },
    {
      id:4,
      img: iphone,
      name: 'iPhone 13 Pro Max',
      description: 'El último smartphone de Apple con cámara avanzada.',
      price: 799.999,
      category:'Phone',
      stock: 3,
      details: 'Telefono para presumir buena economía, pero sin mayores prestaciones que la competencia.'
    },
    {
      id:5,
      img: redmi,
      name: 'Redmi Note 13 Pro 5G 6GB',
      description: 'Smartphone de Xiaomi',
      price: 299.999,
      category:'Phone',
      stock: 15,
      details: 'Grán teléfono, tiene todas las prestaciones que necesitas, una cámara de 50 MPX, 256GB de almacenamiento, una batería de 5100mAh, pero con algunos bugs.'
    },
    {
      id:6,
      img: samsung,
      name: 'Smart TV Samsung 85"',
      description: 'Pantalla grande con calidad de imagen 8K.',
      price: 699.999,
      category:'TV',
      stock: 3,
      details: 'TV Super Ultra HD para ver en extrema resolucion la gota de transpiracion de tu jugador favorito de fútbol.'
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