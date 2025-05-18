"use client"

import { Text, Img, Heading, SelectBox, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import DashboardChart3 from "../../components/DashboardChart3";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";
import Link from "next/link";
import SideNavbar from "../../components/SideNavbar";

export default function AdminManagementPage() {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    return (
        <div className="w-full bg-black-900">
            <div className="flex items-start md:flex-col">
                <div className="flex w-[16%] flex-col items-start gap-9 self-center bg-[#212121] md:w-full md:px-5">
                    <SideNavbar />
                </div>
                <div className="flex flex-1 flex-col gap-[58px] md:self-stretch md:px-5 sm:gap-[29px]">
                    <div className="bg-[#212121] px-5 py-6 sm:py-5">
                        <div className="flex justify-center gap-10 md:flex-col ml-8">
                            <Input
                                color="gray_300"
                                variant="outline"
                                shape="round"
                                name="search"
                                placeholder={"Search"}
                                className="flex-grow rounded-[10px] !border px-4 font-semibold"
                            />
                            <Img
                                src="user-profile-big.png"
                                width={44}
                                height={44}
                                alt="Lockoneoneone"
                                className="h-[44px] md:w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}