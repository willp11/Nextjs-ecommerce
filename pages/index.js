import Head from "next/head";
import ProductCard from "../components/productCard";
import {Products} from '../products/products';

export async function getStaticProps() {
  return {props: {productList: Products}};
}

export default function Home({productList}) {

  let productCards = productList.map(product=>{
    return <ProductCard key={product.name} product={product} />
  })

  return (
    <>
      <Head>
        <title>E-commerce with Next.js</title>
      </Head>
      <div className="w-full bg-gray-50 py-4 px-2">
        <div className="w-full max-w-[64rem] mx-auto flex flex-row flex-wrap justify-center items-start">
          {productCards}
        </div>
      </div>
    </>
  )
}
