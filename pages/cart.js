import Layout from "../components/layout";
import Head from "next/head";

export default function Cart() {
    return (
        <Layout cart={[]}>
            <Head>
                <title>Your Cart</title>
            </Head>
            <div className="w-full min-h-[calc(100vh-80px)] bg-gray-50 py-4 px-2">
                
            </div>
        </Layout>
    )
}