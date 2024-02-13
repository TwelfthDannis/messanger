import "@/app/style/menu.css"
import MenuProfile from "@/app/(site)/Components/MenuComponents/menuProfile"
import MenuItems from "@/app/(site)/Components/MenuComponents/menuItems";
import Logout from "@/app/(site)/Components/MenuComponents/logout";


const Menu =({openMenu,handleOpenMenu}) => {
    return (
        <aside className={`${openMenu ? "" : "-translate-x-full"} absolute flex top-0 left-0 z-40 w-screen h-dvh transition-transform lg:translate-x-0 lg:relative lg:h-full lg:w-auto`}>
            <div className="h-full mr-2 px-3 py-4 bg-zinc-950 w-48 border-r border-zinc-800 flex flex-col justify-between lg:w-auto">
                <MenuProfile/>
                <MenuItems/>
                <Logout/>
            </div>
            <div className="flex flex-1 lg:hidden" onClick={handleOpenMenu}></div>
        </aside>
    )
}
export default Menu