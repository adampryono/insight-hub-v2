import { Text, Img, Heading, SelectBox } from "./../";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

interface Props {
    className?: string;
    price?: React.ReactNode;
    mainValue?: React.ReactNode;
    ordersCounter?: React.ReactNode;
    sixtyValue?: React.ReactNode;
    twentyValue?: React.ReactNode;
    twentyOneValue?: React.ReactNode;
    sixtyOneValue?: React.ReactNode;
    janLabel?: React.ReactNode;
    febLabel?: React.ReactNode;
    marLabel?: React.ReactNode;
    aprLabel?: React.ReactNode;
    mayLabel?: React.ReactNode;
    junLabel?: React.ReactNode;
    contentOneText?: React.ReactNode;
    contentThreeText?: React.ReactNode;
    contentFiveText?: React.ReactNode;
}

export default function DashboardChart3({
    price = "CHART TITLE",
    mainValue = "5.000,00",
    ordersCounter = "50 Orders",
    sixtyValue = "60",
    twentyValue = "20",
    twentyOneValue = "-20",
    sixtyOneValue = "-60",
    janLabel = "Jan",
    febLabel = "Feb",
    marLabel = "Mar",
    aprLabel = "Apr",
    mayLabel = "May",
    junLabel = "Jun",
    contentOneText = "Content",
    contentThreeText = "Content",
    contentFiveText = "Content",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-[50%] md:w-full p-4 bg-background-section rounded`}>
            <div className="flex items-start self-stretch">
                <div className="mb-2 w-full bg-background-section">
                    <div className="flex">
                        <Heading as="p" className="text-[16px] font-medium">
                            {price}
                        </Heading>
                    </div>
                </div>
                <div className="flex items-center ml-auto gap-1">
                    <span className="font-poppins text-[12px] font-medium flex items-center whitespace-nowrap text-gray-50">This Week</span>
                    <button className="flex items-center px-1 py-0.5">
                        <Img src="arrow-down.png" width={8} height={6} alt="Arrow Down" className="h-[6px] w-[8px]" />
                    </button>
                </div>
            </div>
            <div className="flex self-stretch">
                <Text
                    size="textlg"
                    as="p"
                    className="bg-gradient bg-clip-text !font-poppins text-[32px] font-normal tracking-[-1.20px] !text-transparent"
                >
                    {mainValue}
                </Text>
            </div>

            <div className="flex self-stretch">
                <Heading as="p" className="mb-3.5 text-[16px] font-normal">
                    {ordersCounter}
                </Heading>
            </div>
            <div className="mb-2 self-stretch bg-background-section">
                <div className="flex justify-between gap-5 bg-background-section">
                    <div className="flex flex-col items-start gap-[18px]">
                        <Text as="p" className="text-[12px] font-normal">
                            {sixtyValue}
                        </Text>
                        <Text as="p" className="text-[12px] font-normal">
                            {twentyValue}
                        </Text>
                        <Text as="p" className="text-[12px] font-normal">
                            {twentyOneValue}
                        </Text>
                        <Text as="p" className="text-[12px] font-normal">
                            {sixtyOneValue}
                        </Text>
                    </div>
                    <div className="flex-1 bg-background-section">
                        <Img src="Chart-1.png" width={450} height={104} alt="Image" className="h-[104px] w-full" />
                        <div className="flex">
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {janLabel}
                                </Text>
                            </div>
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {febLabel}
                                </Text>
                            </div>
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {marLabel}
                                </Text>
                            </div>
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {aprLabel}
                                </Text>
                            </div>
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {mayLabel}
                                </Text>
                            </div>
                            <div className="flex w-full justify-center px-7 sm:px-5">
                                <Text size="textxs" as="p" className="text-[10px] font-normal">
                                    {junLabel}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-center gap-1 py-2">
                    <div className="mt-4 flex items-center">
                        <Img src="Ellipseblue.png" width={16} height={16} alt="Content" className="h-[16px]" />
                        <Text as="p" className="!font-poppins text-[12px] font-medium">
                            {contentOneText}
                        </Text>
                    </div>
                    <div className="flex items-center">
                        <Img
                            src="Ellipsepurple.png"
                            width={16}
                            height={16}
                            alt="Content"
                            className="h-[16px]"
                        />
                        <Text as="p" className="!font-poppins text-[12px] font-medium">
                            {contentThreeText}
                        </Text>
                    </div>
                    <div className="flex flex-1 items-center">
                        <Img
                            src="Ellipsepink.png"
                            width={16}
                            height={16}
                            alt="Content"
                            className="h-[16px]"
                        />
                        <Text as="p" className="!font-poppins text-[12px] font-medium">
                            {contentFiveText}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
