import { collection, getDocs, query, where, doc, getDoc, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../Service/FireBase/fireBase';

const categories = [
    {id:"Invierno", description:"invierno"},
    {id:"Verano", description:"verano"}
]

export const getCategories = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(categories)
        },1000)
    }
)};

export const getOrders = (itemCollection) => {
    return new getDocs(collection(db, itemCollection))
        .then((QuerySnapshot) => {
            const products = QuerySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            return products;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProductStock = (compra) => {
    const batch = writeBatch(db);
    const outOfStock = [];

    compra.items.forEach((product) => {
        getDoc(doc(db, 'Products', product.product.id))
            .then((docSnapshot) => {
                if (docSnapshot.data().stock >= product.count) {
                    batch.update(doc(db, 'Products', docSnapshot.id), { stock: docSnapshot.data().stock - product.count });
                } else {
                    outOfStock.push({ id: docSnapshot.id, ...docSnapshot.data() });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return { outOfStock, batch };
};

export const outOfStockProduct = (compra, batch, outOfStock) => {
    if (outOfStock.length === 0) {
        return new addDoc(collection(db, 'orders'), compra)
            .then(({ id }) => {
                batch.commit()
                return id;
            })
            .catch((error) => {
                return error;
            })
    }
};

