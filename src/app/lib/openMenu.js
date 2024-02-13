
import { useState } from "react";

const useOpenMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    return { openMenu, handleOpenMenu };
};
export default useOpenMenu;
