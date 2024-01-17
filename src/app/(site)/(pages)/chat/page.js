"use client"
import {useState} from "react";
import ListChat from "./listChat";
import SearchChat from "./searchChat";

export default function Page() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }


    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="bg-zinc-800 block w-full p-4 ps-10 text-sm text-gray-300 border-0 rounded-lg focus-visible:outline-0 focus:ring-blue-300 focus:border-blue-500 lg:bg-zinc-950" placeholder="Search" value={searchQuery} onChange={handleSearch}/>
                </div>
            </form>
            <div className="flex justify-between text-gray-300 my-3">
                <span className="text-lg font-bold">Chats</span>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </button>
            </div>
            <div className="overflow-y-auto scroll-smooth">
                <ul className="rounded-xl text-gray-300 space-y-2">
                    <ListChat/>
                    <div className="w-full h-0.5 bg-zinc-900"/>
                    <SearchChat/>
                </ul>
            </div>
        </div>
    )
}