import {Products} from '../products/products';

export const getProductNames = () => {
    return Products.map(product=>{
        return {
            params: {
                id: product.id.toString()
            }
        }
    })
}

export const getProductData = (id) => {
    const product = Products.find(product => product.id === parseInt(id)) ?? null;
    return product;
}