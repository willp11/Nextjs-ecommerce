import Layout from "../components/layout";
import Head from "next/head";
import ProductCard from "../components/productCard";
import {Products} from '../products/products';
import UpdateCartMsg from "../components/updateCartMsg";
import { useCart } from "../hooks/useCart";
import { useMessage } from '../hooks/useMessage';
import { useEffect, useRef } from "react";

export async function getStaticProps() {
  return {props: {productList: Products}};
}

export default function Home({productList}) {

  const {cart} = useCart();
  const [message, setMessage] = useMessage();
  const oldValueRef = useRef(0)

  useEffect(()=>{
    if (cart.value > oldValueRef.current) {
      setMessage("Item added to cart");
      oldValueRef.current = cart.value;
    } else if (cart.value < oldValueRef.current) {
      setMessage("Item removed from cart");
      oldValueRef.current = cart.value;
    }
  }, [cart])

  let productCards = productList.map(product=>{
    return <ProductCard key={product.name} product={product} />
  })

  return (
    <Layout>
      <Head>
        <title>E-commerce with Next.js</title>
      </Head>
      <div className="w-full bg-gray-50 py-4 px-2">
        <div className="w-full max-w-[64rem] mx-auto flex flex-row flex-wrap justify-center items-start">
          {productCards}
        </div>
      </div>
      {message !== "" ? <UpdateCartMsg message={message} /> : null}
    </Layout>
  )
}
