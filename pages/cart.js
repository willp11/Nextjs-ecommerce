import Layout from "../components/layout";
import Head from "next/head";
import { useCart } from "../hooks/useCart";
import Image from "next/image";

export default function Cart() {

    const {cart, removeItem} = useCart();

    let cartItems = Object.keys(cart.items).map((key)=>{
        console.log(key)
        let item = cart.items[key];
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
                    <div className="flex pt-2">
                        <p>- {item.quantity} +</p>
                        <p className="ml-8">x ${item.price}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <Layout>
            <Head>
                <title>MyShop Cart</title>
            </Head>
            <div className="w-full min-h-[calc(100vh-80px)] bg-gray-50 py-4 px-2">
                <div className="w-full max-w-[64rem] mx-auto flex flex-row flex-wrap justify-center items-start">
                    <div className="w-full bg-white border border-gray-300 rounded shadow p-4">
                        <h1 className="text-left">Your Cart</h1>
                        <div className="flex items-center ml-2">
                            <h2 className="text-lg font-semibold">{cart.total_qty} {cart.total_qty === 1 ? "item" : "items"}</h2>
                            <p className="text-base text-gray-500 ml-4 cursor-pointer hover:text-black">(Clear All)</p>
                        </div>
                        {cartItems}
                        <h2 className="text-lg font-semibold ml-2">Total: ${cart.value}</h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}