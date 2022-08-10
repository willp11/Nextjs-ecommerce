import CheckCircleIcon from "./icons/checkCircleIcon"

export default function AddedMsg({message}) {
    return (
        <div 
            className={`fixed top-3 left-1/2 -translate-x-1/2 z-10
                    w-[250px] p-2 mx-auto bg-white
                    flex items-center justify-evenly 
                    border border-gray-300 rounded shadow-md`}
        >   
            <CheckCircleIcon />
            <p>{message}</p>
        </div>
    )
}