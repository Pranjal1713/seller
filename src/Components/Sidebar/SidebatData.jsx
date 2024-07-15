import React from "react"
import HomeIcon from '@mui/icons-material/Home';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InfoIcon from '@mui/icons-material/Info';


export const SidebarData = [
    {
        title: "Home" ,
        icon:<HomeIcon/> ,
        link: "/home",
    },
    {
        title: "Schedule Message" ,
        icon:<WhatsAppIcon/> ,
        link: "/schedule",
    },
    {
        title: "About" ,
        icon:<InfoIcon/> ,
        link: "/about",
    },

]

