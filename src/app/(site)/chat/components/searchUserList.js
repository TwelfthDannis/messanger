"use client"
import {useEffect, useState} from "react";
import SearchUserBox from "@/app/(site)/chat/components/searchUserBox";

export const searchUserList = ({conversation, search, user}) => {
    const [users, setUsers] = useState(user)
    useEffect(() => {
        if (search) {
            setUsers(user.filter(item => item.username.toLowerCase().startsWith(search.toLowerCase())))
        }
    }, [search]);

    return (
        <ul className="rounded-xl text-gray-300 space-y-2">
            {users.map((item) =>
                <SearchUserBox key={item.id} user={item}/>
            )}
        </ul>
    );
}
export default searchUserList