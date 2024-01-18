
import { useState } from "react";

const useOpenMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        console.log("1")
        setOpenMenu(!openMenu);
    };

    return { openMenu, handleOpenMenu };
};

export default useOpenMenu;
