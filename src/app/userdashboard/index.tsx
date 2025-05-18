"use client";

import { Img, Button, Heading, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import SideNavbar from "../../components/SideNavbar";
import UserdashboardColumnview from "./UserdashboardColumnview";
import Link from "next/link";
import React from "react";

export default function UserDashboardPage() {
    const [searchBarValue, setSearchBarValue] = React.useState("");

    return (
        <div className="w-full bg-black-900">
            <div className="flex items-start">
                <SideNavbar />
                <div className="flex flex-1 flex-col gap-[58px] self-center sm:gap-[29px]">
                    <header className="flex items-center justify-center gap-10 bg-[#212121] px-5 py-6 md:flex-col sm:py-5">
                        <Input
                            color="gray_300"
                            variant="outline"
                            shape="round"
                            name="search"
                            placeholder={'Search'}
                            value={searchBarValue}
                            onChange={(e) => setSearchBarValue(e.target.value)}
                            suffix={searchBarValue.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} /> : null}
                            className="flex-grow rounded-[10px] !border px-4 font-semibold"
                        />
                        <Link href="#">
                            <Img
                                src="user-profile-big.png"
                                width={44}
                                height={44}
                                alt="Lockoneoneone"
                                className="h-[44px] md:w-full"
                            />
                        </Link>
                    </header>
                    <div className="mx-[58px] md:mx-0">
                        <div className="flex items-center justify-center md:flex-col">
                            <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch md:px-5">
                                <Heading
                                    size="heading_h3"
                                    as="h1"
                                    className="mt-1.5 !font-plusjakartasans text-[32px] font-semibold md:text-[30px] sm:text-[28px]"
                                >
                                    Explore Dashboards
                                </Heading>
                                <Heading
                                    size="body_b5"
                                    as="h2"
                                    className="w-[76%] !font-plusjakartasans text-[16px] font-extralight leading-[140%] md:w-full"
                                >
                                    Lorem ipsum dolor sit amet consectetur.Et non morbi lorem pellentesque venenatis nunc cras. Dolor blandit amet tincidunt vulputate integer penatibus.
                                </Heading>
                            </div>
                            <Button
                                variant="gradient"
                                color="linear_1_indigo_900"
                                leftIcon={
                                    <Img
                                        src="user-profile-big.png"
                                        width={24}
                                        height={24}
                                        alt="Heroicons-solid/user-circle"
                                        className="h-[24px] w-[24px] object-contain"
                                    />
                                }
                                className="min-w-[120px] gap-2.5 self-end rounded-[12px] px-4 font-plusjakartasans font-bold md:px-5"
                            >
                                Create
                            </Button>
                        </div>
                        <UserdashboardColumnview />
                        <div className="mt-[62px] flex items-start justify-between gap-5 md:flex-col">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}