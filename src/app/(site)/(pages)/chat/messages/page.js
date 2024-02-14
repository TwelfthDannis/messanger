import "@/app/style/messages.css"
import UpperPanel from "@/app/(site)/Components/messageComponents/upperPanel";
import MessageBox from "@/app/(site)/Components/messageComponents/messageBox";
import DownPanel from "@/app/(site)/Components/messageComponents/downPanel";

export default function Page() {
    return (
        <div className="lg:relative w-full">
            <div
                className="overflow-hidden flex flex-col h-dvh lg:h-full lg:bg-zinc-950 lg:bg-opacity-60 lg:rounded-xl">
                <div className="border-b border-zinc-800 h-14 bg-zinc-950 flex py-2 items-center rounded-t-xl">
                    <UpperPanel/>
                    <button className="p-2 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                             stroke="currentColor" className="w-6 h-6 text-gray-300 ">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
                        </svg>
                    </button>
                </div>
                <MessageBox/>
                <div>
                    <DownPanel/>
                </div>
            </div>
        </div>
    )
}