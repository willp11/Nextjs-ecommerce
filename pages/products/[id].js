import { getProductNames, getProductData } from '../../utils/products';
import Head from 'next/head';
import Image from 'next/image';
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

export async function getStaticPaths() {
    const paths = getProductNames();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const product = getProductData(params.id);
    return {
        props: {
            product
        }
    }
}

export default function Product({ product }) {

    const {addItem} = useCart();
    const [quantity, setQuantity] = useState(0);

    const handleQty = (change) => {
        let qty = quantity + change;
        if (qty >= 0) {
            setQuantity(qty);
        }
    }

    let minusCursor = "cursor-pointer";
    let submitCursor = "cursor-pointer";
    if (quantity === 0) {
        minusCursor = "cursor-not-allowed";
        submitCursor = "cursor-not-allowed";
    }

    return (
        <>
            <Head>
                <title>{product?.name}</title>
            </Head>
            <div className="w-full min-h-[calc(100vh-80px)] bg-gray-50 py-4 px-2">
                <div className="w-full max-w-[64rem] mx-auto flex flex-row flex-wrap justify-center items-start">
                    <div className="w-full bg-white border border-gray-200 rounded shadow p-2 sm:p-4 flex flex-col sm:flex-row justify-center items-center">
                        <div className="w-full sm:w-1/2 flex items-center justify-center">
                            <Image
                                src={product?.image}
                                height={300}
                                width={300}
                                alt={product?.name}
                            />
                        </div>
                        <div className="w-full sm:w-1/2 mt-2 sm:mt-0 rounded border border-gray-200 shadow-md p-4">
                            <h2 className="text-base font-semibold text-gray-500">{product?.brand}</h2>
                            <h1 className="text-base sm:text-xl font-semibold">{product?.name}</h1>
                            <div className="mt-2">
                                <span className="text-gray-600">Availability:</span>
                                <span className="ml-2 font-semibold">In Stock</span>
                            </div>
                            <div className="mt-4 pb-2 border-b border-gray-300">
                                <p className="text-gray-600">Price</p>
                                <p className="text-lg font-semibold">${product?.price}</p>
                            </div>
                            <div className="mt-4 pb-2 border-b border-gray-300">
                                <p className="text-gray-600">Quantity</p>
                                <div className="flex items-center">
                                    <div onClick={()=>handleQty(-1)}>
                                        <MinusIcon className={`${minusCursor} h-[20px] w-[20px] cursor-pointer hover:stroke-red-600`} />
                                    </div>
                                    <p className="mx-4 text-lg font-semibold">{quantity}</p>
                                    <div onClick={()=>handleQty(1)}>
                                        <PlusIcon className="h-[20px] w-[20px] cursor-pointer hover:stroke-green-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className={`${submitCursor} mt-2 px-2 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700 transition ease-in-out duration-300`}
                                    disabled={quantity === 0}
                                    onClick={()=>addItem(product, quantity)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}