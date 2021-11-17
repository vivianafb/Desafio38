import { productsAPI } from '../apis/productos';

export const getProductosGraph = () => {
    const producto =  productsAPI.getProducts();
     return producto
};

export const addProductoGraph = (args) =>{
    const newItem =  productsAPI.addProduct(args)
    return newItem
};