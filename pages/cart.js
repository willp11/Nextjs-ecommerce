import Head from "next/head";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/cartItem";

export default function Cart() {

    const {cart} = useCart();

    let cartItems = Object.keys(cart.items).map((key)=>{
        let item = cart.items[key];
        return <CartItem key={key} item={item} />
    })

    return (
        <>
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
                        <h2 className="text-lg font-semibold ml-2 mt-2">Total: ${cart.value}</h2>
                        <button className="ml-2 mt-2 px-2 py-1 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700 transition ease-in-out duration-300">
                            Go to checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}