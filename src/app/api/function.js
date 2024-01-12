import {useState} from "react";


export default function useOpenMenu(){
    const [openMenu,setOpenMenu] =useState(false);
    const handleOpenMenu =()=>{
        setOpenMenu((prev)=>!prev)
    }
    return{
        openMenu,
        handleOpenMenu
    }
}