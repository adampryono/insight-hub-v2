"use client";

import { Img } from "../Img";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
    className?: string;
}

export default function SideNavbar({ ...props }: Props) {
    return (
        <Sidebar
            {...props}
            width="242px !important"
            rootStyles={{ [`${sidebarClasses.container}`]: { gap: 36,} }}
            className={`${props.className} flex flex-col h-screen pt-[42px] gap-9 top-0 md:pt-5 bg-[#212121] !sticky overflow-auto`}
        >
            <Img 
                src="InsightHub.png"
                width={84}
                height={20}
                alt="Sidebarlogoone"
                className="ml-11 h-[20px] w-[84px] object-contain mb-8"
            />
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "14px 14px 14px 18px",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "16px",
                        marginLeft: "22px",
                        marginRight: "22px",
                        ['&:hover, &.ps-active']: { background: "linear-gradient(123.69deg, #62bdae,#44babd,#3ba2c3,#2b2b67)" },
                    },
                }}
                rootStyles={{ ['ul']: { gap: "1.00px" } }}
                className="flex w-full flex-col self-stretch"
            >
                <MenuItem>Home</MenuItem>
                <MenuItem>Recents</MenuItem>
            </Menu>
        </Sidebar>
    );
}