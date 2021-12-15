const products = [
    {
        id: "1",
        name:"Buzo canguro",
        precio:"$5000",
        img:"./img/buzo-canguro.jpg",
        descripcion:"Un buzo All Black",
        stock:"10",
        texto:"Un buzo de tela elastizada, con capucha y mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "2",
        name:"Buzo estampado",
        precio:"$5500",
        img:"./img/canguro-estampado.jpg",
        descripcion:"Un buzo estampado All Black",
        stock:"5",
        texto:"Un buzo estampado de tela elastizada, con capucha y mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "3",
        name:"Botas negras",
        precio:"$8000",
        img:"./img/botas.jpg",
        descripcion:"Unas botas All Black",
        stock:"5",
        texto:"Unas botas de cuero negras, con cordones y mucho estilo. Ideales para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "4",
        name:"Sweater",
        precio:"$6500",
        img:"./img/sweater.jpg",
        descripcion:"Un sweater All Black",
        stock:"5",
        texto:"Un sweater de lana, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "5",
        name:"Remera estampada",
        precio:"$4000",
        img:"./img/remera.jpg",
        descripcion:"Una remera All Black",
        stock:"5",
        texto:"Una remera de tela elastizada, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Verano"
    },
    {
        id: "6",
        name:"Remera Lisa",
        precio:"$3500",
        img:"./img/remera-lisa.jpg",
        descripcion:"Una remera All Black",
        stock:"5",
        texto:"Una remera de tela elastizada, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Verano"
    },
    {
        id: "7",
        name:"Short",
        precio:"$3900",
        img:"./img/short.jpg",
        descripcion:"Un short All Black",
        stock:"5",
        texto:"Un short, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Verano"
    },
]

const categories = [
    {id:"Invierno", description:"invierno"},
    {id:"Verano", description:"verano"}
]

export const getCategories = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(categories)
        },4000)
    }
)};

export const getProducts = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(product => product.category === category)) : resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0])
        },4000)
    }
)};