const products = [
    {
        id: "1",
        name:"Buzo canguro",
        precio:"$5000",
        img:"https://http2.mlstatic.com/D_NQ_NP_730049-MLA45474430738_042021-O.webp",
        descripcion:"Un buzo All Black",
        stock:"10",
        texto:"Un buzo de tela elastizada, con capucha y mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "2",
        name:"Buzo estampado",
        precio:"$5500",
        img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/814/563/products/antisocial1-6105119105fad8b3b816225817571670-640-0.jpg",
        descripcion:"Un buzo estampado All Black",
        stock:"11",
        texto:"Un buzo estampado de tela elastizada, con capucha y mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "3",
        name:"Botas negras",
        precio:"$8000",
        img:"https://media.revistagq.com/photos/6019279296421469deb60c11/master/w_1784,h_2379,c_limit/2700690040_2_1_1.jpg",
        descripcion:"Unas botas All Black",
        stock:"10",
        texto:"Unas botas de cuero negras, con cordones y mucho estilo. Ideales para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "4",
        name:"Sweater",
        precio:"$6500",
        img:"https://images.jumpseller.com/store/mostore/9586520/SWEATER_LING_NEGRO_MO_STORE_ROPA_DE_HOMBRE_HECHO_EN_CHILE.png",
        descripcion:"Un sweater All Black",
        stock:"12",
        texto:"Un sweater de lana, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Invierno"
    },
    {
        id: "5",
        name:"Remera estampada",
        precio:"$4000",
        img:"https://img.romwe.com/images/romwe.com/201608/1471223430133382413.webp",
        descripcion:"Una remera All Black",
        stock:"3",
        texto:"Una remera de tela elastizada, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Verano"
    },
    {
        id: "6",
        name:"Remera Lisa",
        precio:"$3500",
        img:"https://jumboargentina.vtexassets.com/arquivos/ids/660630-800-auto?v=637654365265300000&width=800&height=auto&aspect=true",
        descripcion:"Una remera All Black",
        stock:"9",
        texto:"Una remera de tela elastizada, con mucho estilo. Ideal para vos que sos todo un All Black.",
        category:"Verano"
    },
    {
        id: "7",
        name:"Short",
        precio:"$3900",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_883909-MLA44200904363_112020-F.webp",
        descripcion:"Un short All Black",
        stock:"8",
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

export const getItemById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(
            (prod) => parseInt(prod.id) === parseInt(id)
        );
        setTimeout(() => {
            resolve(product);
            reject("No se pueden cargar los productos");
        }, 2000);
    });
};

export const getItem = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0])
        },4000)
    }
)};