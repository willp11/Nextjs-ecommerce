import Image from "next/image";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useCart } from "../hooks/useCart";

export default function CartItem({item}) {
    const {addItem, removeItem} = useCart();

    if (item.quantity > 0) {
        return (
            <div className="w-full mx-1 my-4 px-2 py-4 border border-gray-200 rounded-md shadow-md flex justify-start items-center overflow-x-auto">
                <div className="h-[100px] min-w-[100px]">
                    <Image
                        src={item.image}
                        height={100}
                        width={100}
                        alt={item.name}
                    />
                </div>
                <div>
                    <p className="text-lg font-semibold truncate">{item.name}</p>
                    <div className="flex pt-2 items-center">
                        <div onClick={()=>removeItem(item, 1)}>
                            <MinusIcon className="h-[20px] w-[20px] cursor-pointer hover:stroke-red-600" />
                        </div>
                        <p className="text-xl mx-4">{item.quantity}</p>
                        <div onClick={()=>addItem(item, 1)}>
                            <PlusIcon className="h-[20px] w-[20px] cursor-pointer hover:stroke-green-600" />
                        </div>
                        <div className="ml-8 flex items-center">
                            <p className="ml-8 mr-2 text-lg text-gray-500">x</p>
                            <p className="text-xl font-semibold">${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}