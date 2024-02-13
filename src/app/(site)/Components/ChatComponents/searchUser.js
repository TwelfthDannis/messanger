import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Image from "next/image";
import avatarImage from "@/../public/no-avatar.jpg"

export const searchUser=({querySearch,getChat})=> {
    const timerRef = useRef(null);
    const [searchUsers,setSearchUsers] = useState([])
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (querySearch) {
            timerRef.current = setTimeout(() => searchUser(querySearch), 1000)
        }
    }, [querySearch]);

    const searchUser=async ()=>{
        try {
            const response = await axios.post("/api/chat/searchUser",{querySearch})
            setSearchUsers(response.data)
        }catch (err) {
            console.log(err);
        }
    }


    return (
        <ul className="rounded-xl text-gray-300 space-y-2">
            {searchUsers.map((users)=>
                <li key={users.id} onClick={() => getChat(users)}>
                    <div className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                        <Image className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover" src={avatarImage} alt="avatar"/>
                        <div className="flex-1 grid grid-rows-2 gap-1">
                            <span className="block font-bold">{users.username}</span>
                        </div>
                    </div>
                </li>)}
            <div className="w-full h-0.5 bg-zinc-900"/>
        </ul>
    );
}
export default searchUser