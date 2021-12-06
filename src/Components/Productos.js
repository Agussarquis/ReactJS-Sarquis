const products = [
    {
        id: "1",
        name:"Buzo canguro",
        precio:"$5000",
        img:"./img/buzo-canguro.jpg",
        descripcion:"Un buzo All Black",
        stock:"5",
        texto:"Un buzo de tela elastizada, con capucha y mucho estilo. Ideal para vos que sos todo un All Black."
    },
    {
        id: "2",
        name:"Buzo estampado",
        precio:"$5500",
        img:"./img/canguro-estampado.jpg",
        descripcion:"Un buzo estampado All Black",
        stock:"4"
    },
    {
        id: "3",
        name:"Botas negras",
        precio:"$8000",
        img:"./img/botas.jpg",
        descripcion:"Unas botas All Black",
        stock:"5"
    },
    {
        id: "4",
        name:"Sweater",
        precio:"$6500",
        img:"./img/sweater.jpg",
        descripcion:"Un sweater All Black",
        stock:"5"
    },
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        },3000)
    }
)};

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0])
        },4000)
    }
)};