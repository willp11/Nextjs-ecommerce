import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/router";

export default function ProductCard({ product }) {

    const { addItem } = useCart();

    const router = useRouter();

    return (
        <div className="group h-[28rem] w-[20rem] bg-white m-2 border border-gray-300 rounded shadow-sm">
            <div className="h-2/3 w-full flex items-center justify-center cursor-pointer" onClick={()=>router.push(`/products/${product.id}`)}>
                <div className="relative w-3/4 h-3/4 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
                    <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        alt={product.name}
                    />
                </div>
            </div>
            <div className="h-1/3 w-full p-4">
                <div className="h-1/2 w-full">
                    <p className="text-gray-500 font-bold">{product.brand}</p>
                    <p className="font-semibold truncate cursor-pointer" onClick={()=>router.push(`/products/${product.id}`)}>{product.name}</p>
                </div>
                <div className="h-1/2 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-semibold">${product.price}</p>
                    </div>
                    <button 
                        className="border border-gray-300 rounded p-2 font-semibold transition ease-in-out duration-300 hover:bg-blue-500 hover:text-white"
                        onClick={()=>addItem(product, 1)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}