import MenuProfile from "@/app/(site)/menu/components/menuProfile";
import MenuItems from "@/app/(site)/menu/components/menuItems";
import Logout from "@/app/(site)/menu/components/logout";
import "./style/menu.css"


const Page=()=>{
    return(
        <aside className={`-translate-x-full" absolute flex top-0 left-0 z-40 w-screen h-dvh transition-transform lg:translate-x-0 lg:relative lg:h-full lg:w-auto`}>
            <div className="h-full mr-2 px-3 py-4 bg-zinc-950 w-48 border-r border-zinc-800 flex flex-col justify-between lg:w-auto">
                <MenuProfile/>
                <MenuItems/>
                <Logout/>
            </div>
            <div className="flex flex-1 lg:hidden"></div>
        </aside>
    )
}
export default Page;