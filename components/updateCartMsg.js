import { CheckCircleIcon } from "@heroicons/react/outline";

export default function UpdateCartMsg({message}) {
    return (
        <div 
            className={`fixed top-3 left-1/2 -translate-x-1/2 z-10
                    w-[250px] p-2 mx-auto bg-white
                    flex items-center justify-evenly 
                    border border-gray-300 rounded shadow-md`}
        >   
            <CheckCircleIcon className="h-[24px] w-[24px] stroke-green-600" />
            <p>{message}</p>
        </div>
    )
}