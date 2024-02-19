import Menu from "@/app/(site)/menu/page"
import {Suspense} from "react";
import Loading from "@/app/(site)/loading";


export default function Layout({children}) {
    return (
        <div className="hidden overflow-hidden bg-zinc-900 bg-opacity-60 container h-3/4 rounded-3xl lg:flex">
            <Menu/>
            <div className="lg:grid lg:grid-cols-3 w-full gap-4 p-4">
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}