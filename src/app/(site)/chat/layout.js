import getConversation from "@/app/action/getConversation";
import getUsers from "@/app/action/getUsers";
import WidgetPage from "@/app/(site)/chat/widgetId/page";
import SideBar from "@/app/(site)/chat/components/sideBar";
import Loading from "@/app/(site)/loading";
import {Suspense} from "react";

const Layout=async({children})=>{
    const conversation = await getConversation()
    const user = await getUsers()
    return(
        <Suspense fallback={<Loading/>}>
            <SideBar conversation={conversation} user={user}/>
            {children}
            <WidgetPage/>
        </Suspense>
    )
}
export default Layout
