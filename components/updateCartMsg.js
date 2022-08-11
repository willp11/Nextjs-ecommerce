import CheckCircleIcon from "./icons/checkCircleIcon";
import XCircleIcon from "./icons/xCircleIcon";

export default function UpdateCartMsg({message}) {
    let icon = null;
    if (message === "Item added to cart") {
        icon = <CheckCircleIcon />
    } else if (message === "Item removed from cart") {
        icon = <XCircleIcon />
    }

    return (
        <div 
            className={`fixed top-3 left-1/2 -translate-x-1/2 z-10
                    w-[250px] p-2 mx-auto bg-white
                    flex items-center justify-evenly 
                    border border-gray-300 rounded shadow-md`}
        >   
            {icon}
            <p>{message}</p>
        </div>
    )
}