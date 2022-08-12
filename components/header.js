import {ShoppingCartIcon} from '@heroicons/react/solid';
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/router";
import UpdateCartMsg from "../components/updateCartMsg";
import { useRef, useEffect, useState } from 'react';
import { useMessage } from '../hooks/useMessage';

export default function Header() {

    const router = useRouter();
    const {cart} = useCart();

    const [isSSR, setIsSSR] = useState(true);
    const [message, setMessage] = useMessage();
    const oldValueRef = useRef(0)

    useEffect(() => {
        setIsSSR(false);
        oldValueRef.current = cart.value;
    }, []);

    useEffect(()=>{
        if (cart.value > oldValueRef.current && !isSSR) {
            setMessage("Item added to cart");
            oldValueRef.current = cart.value;
        } else if (cart.value < oldValueRef.current && !isSSR) {
            setMessage("Item removed from cart");
            oldValueRef.current = cart.value;
        }
    }, [cart])
    
    return (
        <div className="w-full h-[80px] px-6 py-2 border-b-2 border-gray-200 flex items-center justify-center">
            <div className="w-full max-w-[64rem] flex justify-between items-center">
                <p className="text-3xl tracking-tight font-extrabold cursor-pointer" onClick={()=>router.push("/")}>MyShop</p>
                <div 
                    className="flex items-center cursor-pointer group"
                    onClick={()=>router.push("/cart")}
                >
                    <ShoppingCartIcon className="h-[28px] w-[28px] cursor-pointer transition ease-in-out duration-300 fill-gray-600 group-hover:fill-black" />
                    <p className="text-lg ml-1">${!isSSR ? cart.value.toFixed(2) : null}</p>
                    <p className="text-gray-500 pl-1">({!isSSR ? cart.total_qty : null})</p>
                </div>
            </div>
            {message !== "" ? <UpdateCartMsg message={message} /> : null}
        </div>
    )
}