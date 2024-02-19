import {useMemo} from "react";
import {useSession} from "next-auth/react";


const useOtherUser = (conversation) => {
    const {data:session} = useSession();
    return useMemo(() => {
        const currentUserEmail = session?.user?.email;
        const otherUser = conversation.users.filter((user) => user.email !== currentUserEmail);
        return otherUser[0];
    }, [session?.user?.email, conversation.users]);
};

export default useOtherUser;