import ShoppingCartIcon from "./icons/shoppingCartIcon";
import { useCallback, useEffect, useState } from "react";

export default function Header({ cart }) {

    const [itemsQty, setItemsQty] = useState(0);
    const [cartValue, setCartValue] = useState(0);

    const calcCartValue = useCallback(()=>{
        let value = 0;
        let qty = 0;
        cart.forEach((item)=>{
            value += item.quantity * item.product.price;
            qty += item.quantity
        })
        setCartValue(value);
        setItemsQty(qty);
    }, [cart])

    useEffect(()=>{
        calcCartValue();
    }, [calcCartValue])

    return (
        <div className="w-full h-[80px] px-6 py-2 border-b-2 border-gray-200 flex items-center justify-center">
            <div className="w-full max-w-[64rem] flex justify-between items-center">
                <p className="text-3xl tracking-tight font-extrabold">MyShop</p>
                <div className="flex items-center cursor-pointer group">
                    <ShoppingCartIcon />
                    <p className="text-lg">${cartValue.toFixed(2)}</p>
                    <p className="text-gray-500 pl-1">({itemsQty})</p>
                </div>
            </div>
        </div>
    )
}