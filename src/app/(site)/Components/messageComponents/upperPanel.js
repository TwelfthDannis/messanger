import Image from "next/image";
import avatar from "../../../../../public/no-avatar.jpg";


const UpperPanel=({getChat})=>{
    return (
        <div className="flex w-full justify-center items-center">
            <Image
                className="w-8 h-8 mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                src={avatar} alt="avatar"/>
            <div className="grid grid-rows-2 items-center">
                <span className="font-bold text-gray-300">{getChat.username}</span>
                <span className="font-bold text-xs text-zinc-500">last active</span>
            </div>
        </div>
    )
}
export default UpperPanel