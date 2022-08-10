import ShoppingCartIcon from "./icons/shoppingCartIcon";
import { useState } from "react";

export default function Header() {

    const [fill, setFill] = useState("fill-gray-600");

    return (
        <div className="h-[80px] px-6 py-2 border-b-2 border-gray-200 flex items-center justify-center">
            <div className="w-full max-w-[64rem] flex justify-between items-center">
                <p className="text-3xl tracking-tight font-extrabold">MyShop</p>
                <div className="flex items-center cursor-pointer"
                    onMouseEnter={()=>setFill("fill-black")}
                    onMouseLeave={()=>setFill("fill-gray-600")}
                >
                    <ShoppingCartIcon fill={fill} />
                    <p className="text-lg">$0.00</p>
                    <p className="text-gray-500 pl-1">(0)</p>
                </div>
            </div>
        </div>
    )
}