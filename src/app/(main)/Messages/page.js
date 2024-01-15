"use client"
import Image from "next/image";
import avatar from "../../no-avatar.jpg"
import "./messages.css"

export default function Page() {
    return (
        <div className="lg:relative w-full">
            <div className="overflow-hidden flex flex-col h-dvh lg:h-full lg:bg-zinc-950 lg:bg-opacity-60 lg:rounded-xl">
                <div className="border-b border-zinc-800 h-14 bg-zinc-950 flex py-2 items-center rounded-t-xl">
                    <div className="flex w-full justify-center items-center">
                        <Image
                            className="w-8 h-8 mr-2.5 text-center rounded-full ring-2 ring-gray-300 object-cover"
                            src={avatar} alt="avatar"/>
                        <div className="grid grid-rows-2 items-center">
                            <span className="font-bold text-gray-300">Name</span>
                            <span className="font-bold text-xs text-zinc-500">last active</span>
                        </div>
                    </div>
                    <button className="p-2 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="w-6 h-6 text-gray-300 ">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                        </svg>
                    </button>
                </div>
                <ul className="space-y-2 px-4 flex flex-1 flex-col text-violet-600 overflow-hidden overflow-y-auto py-3 scroll-smooth">
                    <li className="flex items-start w-full">
                        <Image className="h-6 w-6 object-cover rounded-full messageAnother" src={avatar}
                               alt={"avatar"}/>
                        <div className="overflow-hidden break-words bg-zinc-900 p-2 rounded-xl text-sm">
                            qqqqqqqqqqqqqqq
                        </div>
                    </li>
                </ul>
                <form>
                    <div
                        className="flex items-center px-2 py-2 bottom-0 bg-zinc-900 border-t border-zinc-800 ">
                        <button type="button"
                                className="p-2 text-gray-500 rounded-lg cursor-pointer">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                            </svg>
                        </button>
                        <textarea id="chat" rows={1}
                                  className="resize-none block mx-2 p-2.5 w-full text-sm text-gray-300 bg-zinc-800 rounded-xl focus-within:outline-0"
                                  placeholder="Your message..."></textarea>
                        <button type="submit"
                                className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-violet-600 hover:bg-zinc-800">
                            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path
                                    d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}