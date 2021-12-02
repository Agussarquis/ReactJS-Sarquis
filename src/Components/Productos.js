const products = [
    {
        id: "1",
        name:"Buzo canguro",
        precio:"$5000",
        img:"./img/buzo-canguro.jpg",
        descripcion:"Un buzo All Black",
        stock:"5"
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
)}
