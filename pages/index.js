import Layout from "../components/layout";
import Head from "next/head";
import ProductCard from "../components/productCard";
import {Products} from '../products/products';

export default function Home() {

  let productCards = Products.map(product=>{
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
    </Layout>
  )
}
