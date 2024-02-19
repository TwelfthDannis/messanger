
import Image from "next/image";
import avatarImage from "../../../../../public/no-avatar.jpg"

export const searchUser=()=> {

    return (
        <ul className="rounded-xl text-gray-300 space-y-2">
            <li>
                <div
                    className="bg-zinc-800 p-2.5 rounded-lg flex items-center text-sm transition ease-linear duration-150 lg:hover:bg-zinc-950 lg:bg-transparent">
                    <Image
                        className="w-10 h-10 box-border mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                        src={avatarImage} alt="avatar"/>
                    <div className="flex-1 grid grid-rows-2 gap-1">
                        <span className="block font-bold">Name</span>
                    </div>
                </div>
            </li>
        </ul>
    );
}
export default searchUser