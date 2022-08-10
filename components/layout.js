import Header from "./header";

export default function Layout({ children, cart }) {
    return (
        <div>
            <Header cart={cart} />
            {children}
        </div>
    )
}