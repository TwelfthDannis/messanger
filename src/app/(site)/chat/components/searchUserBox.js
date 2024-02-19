import Image from "next/image";
import avatarImage from "@/../public/no-avatar.jpg";
import {useRouter} from "next/navigation";
import {useCallback} from "react";
import axios from "axios";


const searchUserBox=({user})=>{
    const router = useRouter()

    const handleClick = useCallback(async ()=>{
        const response = await axios.post("api/conversation",{
            userId: user.id,
        })
        router.push(`/chat/${response.data.id}`)
    })

    return (
        <li onClick={handleClick}>
            <div className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                <Image className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                    src={avatarImage} alt="avatar"/>
                <span className="block font-bold">{user.username}</span>
            </div>
        </li>
    )
}
export default searchUserBox