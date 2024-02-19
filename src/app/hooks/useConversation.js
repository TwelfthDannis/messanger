import {useMemo} from "react";
import {useParams} from "next/navigation";


const useConversation=()=>{
    const params=useParams();

    const conversationId=useMemo(()=>{
        if (!params.messagesId){
            return ""
        }
        return params.messagesId
    },[params?.messagesId])

    return useMemo(()=>({
        conversationId
    }),[conversationId])
}
export default useConversation