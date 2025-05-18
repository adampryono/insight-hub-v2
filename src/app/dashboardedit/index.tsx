import { Text, Img, Heading, SelectBox, Button } from "../../components";
import DashboardChart11 from "../../components/DashboardChart11";
import DashboardChart3 from "@/components/DashboardChart3";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

// You need to define dropDownOptions and SelectBox import!

const dropDownOptions = [
    { label: "This Week", value: "this_week" },
    { label: "Last Week", value: "last_week" },
];

const data = [
    { userImage: "Ellipseblue.png", userContent: "Content" },
    { userImage: "Ellipsepurple.png", userContent: "Content" },
    { userImage: "Ellipsepink.png", userContent: "Content" },
];


export default function DashboardEditPage() {
    return (
        <div className="flex w-full flex-col items-center bg-black-900 p-14 md:p-5">
            <div className="container-xs flex flex-col items-start gap-1">
                <Heading
                    size="heading_h3"
                    as="h1"
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
            <div className="container-xs mt-7 flex flex-col gap-4">
                <div className="flex gap-[26px] md:flex-col">
                    <DashboardChart3 />
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
                            <div className="flex flex-col items-start gap-[18px] md:px-5">
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
            <div className="mx-auto mb-1 mt-12 flex w-full max-w-[1140px] justify-between gap-5 md:flex-col">
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
                <div className="h-[60px] w-[60px] rounded-[12px] bg-white-white_1" />
            </div>
        </div>
    );
}