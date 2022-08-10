import ShoppingCartIcon from "./icons/shoppingCartIcon";

export default function Header() {

    return (
        <div className="h-[80px] px-6 py-2 border-b-2 border-gray-200 flex items-center justify-center">
            <div className="w-full max-w-[64rem] flex justify-between items-center">
                <p className="text-3xl tracking-tight font-extrabold">MyShop</p>
                <div className="flex items-center cursor-pointer group">
                    <ShoppingCartIcon />
                    <p className="text-lg">$0.00</p>
                    <p className="text-gray-500 pl-1">(0)</p>
                </div>
            </div>
        </div>
    )
}