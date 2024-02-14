
import Image from "next/image";
import avatar from "../../../../../public/no-avatar.jpg";

const messageBox=()=>{


    return (
        <ul className="space-y-2 px-4 flex flex-1 flex-col text-violet-600 overflow-hidden overflow-y-auto py-3 scroll-smooth">
            <li className="flex items-start w-full">
                <Image className="h-6 w-6 object-cover rounded-full messageAnother" src={avatar}
                       alt={"avatar"}/>
                <div className="overflow-hidden break-words bg-zinc-900 p-2 rounded-xl text-sm">
                    q
                </div>
            </li>
        </ul>
    )
}

export default messageBox