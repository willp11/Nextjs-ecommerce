import Layout from "../components/layout";
import Head from "next/head";
import ProductCard from "../components/productCard";
import {Products} from '../products/products';
import { useState } from "react";
import { useMessage } from "../hooks/useMessage";
import AddedMsg from "../components/addedMsg";

export async function getStaticProps() {
  return {props: {productList: Products}};
}

export default function Home({productList}) {

  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useMessage();

  function findItemInCart(product, cart) {
    let index = null;
    cart.forEach((item, idx)=>{
      if (item.product.name === product.name) {
        index = idx;
      }
    })
    return index;
  }

  function addToCart(product) {
    let cartCopy = [...cart];
    let indexInCart = findItemInCart(product, cartCopy);
    if (indexInCart !== null) {
      cartCopy[indexInCart].quantity++;
    }
    else {
      let newItem = {product, quantity: 1}
      cartCopy.push(newItem)
    }
    setCart(cartCopy);
    setAddedMessage(`Item added to cart`);
  }

  function editCartQty(product, newQty) {
    let cartCopy = [...cart];
    let indexInCart = findItemInCart(product, cartCopy);
    if (indexInCart !== null) {
      cartCopy[indexInCart].quantity = newQty
    }
    setCart(cartCopy);
  }

  let productCards = productList.map(product=>{
    return <ProductCard key={product.name} product={product} addToCart={addToCart}/>
  })

  return (
    <Layout cart={cart}>
      <Head>
        <title>E-commerce with Next.js</title>
      </Head>
      <div className="w-full bg-gray-50 py-4 px-2">
        <div className="w-full max-w-[64rem] mx-auto flex flex-row flex-wrap justify-center items-start">
          {productCards}
        </div>
      </div>
      {addedMessage !== "" ? <AddedMsg message={addedMessage} /> : null}
    </Layout>
  )
}
