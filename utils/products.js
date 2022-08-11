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
    for (let i=0; i<Products.length; i++) {
        let product = Products[i];
        if (product.id === parseInt(id)) {
            return product;
        }
    }
    return null;
}