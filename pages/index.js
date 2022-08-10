import Layout from "../components/layout";
import Head from "next/head";
import ProductCard from "../components/productCard";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>E-commerce with Next.js</title>
      </Head>
      <div className="w-full max-w-[64rem] mt-4 mx-auto flex flex-row flex-wrap justify-center items-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  )
}
