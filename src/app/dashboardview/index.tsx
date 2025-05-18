"use client"

import { Text, Img, Heading, SelectBox, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import DashboardChart3 from "../../components/DashboardChart3";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";
import Link from "next/link";
import SideNavbar from "../../components/SideNavbar";

const data = [
    { userImage: "Ellipseblue.png", userContent: "Content" },
    { userImage: "Ellipsepurple.png", userContent: "Content" },
    { userImage: "Ellipsepink.png", userContent: "Content" },
];

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function DashboardViewPage() {
    const [searchBarValue, setSearchBarValue] = React.useState("");
    return (
        <div className="w-full bg-black-900">
            <div className="flex items-start md:flex-col">

                <div className="flex w-[16%] min-h-screen flex-col items-start gap-9 self-stretch bg-[#212121] md:w-full md:px-5">
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
                    <div className="mx-[58px] md:mx-0">
                        <div className="flex items-center justify-between gap-5 md:flex-col">
                            <div className="flex flex-1 flex-col items-start justify-center md:self-stretch">
                                <Heading
                                    size="body_b5"
                                    as="h2"
                                    className="!font-plusjakartasans text-[16px] font-thin text-white opacity-60"
                                >
                                    Home / Content Performance
                                </Heading>
                                <div className="flex flex-col items-start gap-1 self-stretch">
                                    <Heading
                                        size="heading_h3"
                                        as="h3"
                                        className="mt-1.5 !font-plusjakartasans text-[32px] font-medium md:text-[30px] sm:text-[28px]"
                                    >
                                        Player Performance
                                    </Heading>
                                    <Heading
                                        size="body_b5"
                                        as="h4"
                                        className="w-[84%] !font-plusjakartasans text-[16px] font-thin leading-[140%] md:w-full"
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Et non morbi lorem pellentesque venenatis nunc cras. Dolor blandit amet tincidunt vulputate integer penatibus.
                                    </Heading>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Img src="user-profile.png" width={20} height={20} alt="Lockthreeone" className="h-[20px]" />
                                <Img src="user-profile.png" width={20} height={20} alt="Lockfiveoneone" className="h-[20px]" />
                                <Img src="user-profile.png" width={20} height={20} alt="Locksevenone" className="h-[20px]" />
                            </div>
                        </div>
                        <div className="mt-[34px] flex gap-[26px] md:flex-col">
                            <DashboardChart3/>
                            <DashboardChart3
                                price="CHART TITLE"
                                mainValue="5.000,00"
                                ordersCounter="50 Orders"
                                sixtyValue="60"
                                twentyValue="20"
                                twentyOneValue="-20"
                                sixtyOneValue="-60"
                                janLabel="Jan"
                                febLabel="Feb"
                                marLabel="Mar"
                                aprLabel="Apr"
                                mayLabel="Mai"
                                junLabel="Jun"
                                contentOneText="Content"
                                contentThreeText="Content"
                                contentFiveText="Content"
                            />
                        </div>
                        <div className="mt-4 rounded bg-background-section p-4">
                            <div className="flex items-start md:flex-col">
                                <div className="mb-2 w-full bg-background-section">
                                    <div className="flex">
                                        <Heading as="h5" className="text-[16px] font-medium">
                                            CHART TITLE
                                        </Heading>
                                    </div>
                                </div>
                                <SelectBox
                                    shape="square"
                                    indicator={
                                        <Img src="img_arrowdown.svg" width={8} height={6} alt="Arrow Down" className="h-[6px] w-[8px]" />
                                    }
                                    name="arrowdownone"
                                    placeholder={"This Week"}
                                    options={dropDownOptions}
                                    className="w-full gap-2 px-2.5 font-poppins font-medium"
                                />
                            </div>
                            <div className="flex">
                                <Text
                                    size="textlg"
                                    as="p"
                                    className="bg-gradient bg-clip-text !font-poppins text-[32px] font-normal tracking-[-1.20px] !text-transparent md:text-[30px] sm:text-[28px]"
                                >
                                    5.000,00
                                </Text>
                            </div>
                            <div className="flex">
                                <Heading as="h6" className="mb-3.5 text-[16px] font-normal">
                                    50 Orders
                                </Heading>
                            </div>
                            <div className="mb-2 bg-background-section">
                                <div className="flex justify-between gap-5 bg-background-section md:flex-col">
                                    <div className="flex flex-col items-start gap-[18px] md:px5">
                                        <Text as="p" className="text-[12px] font-normal">
                                            60
                                        </Text>
                                        <Text as="p" className="text-[12px] font-normal">
                                            20
                                        </Text>
                                        <Text as="p" className="text-[12px] font-normal">
                                            -20
                                        </Text>
                                        <Text as="p" className="text-[12px] font-normal">
                                            -60
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex-1 bg-background-section md:self-stretch md:px-5">
                                    <Img
                                        src="Chart-3.png"
                                        width={1004}
                                        height={104}
                                        alt="Imageoneoneone"
                                        className="h-[104px] w-full md:h-auto"
                                    />
                                    <div className="flex md:flex-col">
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                Jan
                                            </Text>
                                        </div>
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                Feb
                                            </Text>
                                        </div>
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                Mar
                                            </Text>
                                        </div>
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                Apr
                                            </Text>
                                        </div>
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                May
                                            </Text>
                                        </div>
                                        <div className="flex w-full justify-center px-14 md:px-5">
                                            <Text size="textxs" as="p" className="text-[10px] font-normal">
                                                Jun
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 py-2 md:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {data.map((d, index) => (
                                        <UserProfile {...d} key={"listcontentone" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}