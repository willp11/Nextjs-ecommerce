import ShoppingCartIcon from "./icons/shoppingCartIcon";
import { useCart } from "../hooks/useCart";

export default function Header() {

    const {cart} = useCart();

    return (
        <div className="w-full h-[80px] px-6 py-2 border-b-2 border-gray-200 flex items-center justify-center">
            <div className="w-full max-w-[64rem] flex justify-between items-center">
                <p className="text-3xl tracking-tight font-extrabold">MyShop</p>
                <div className="flex items-center cursor-pointer group">
                    <ShoppingCartIcon />
                    <p className="text-lg">${cart.value.toFixed(2)}</p>
                    <p className="text-gray-500 pl-1">({cart.total_qty})</p>
                </div>
            </div>
        </div>
    )
}