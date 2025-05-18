import { Text, Img, Heading, Button } from "./..";
import React from "react";

interface Props {
    className?: string;
    chartTitle?: React.ReactNode;
    weekLabel?: React.ReactNode;
    mainValue?: React.ReactNode;
    ordersCounter?: React.ReactNode;
    sixty?: React.ReactNode;
    twenty?: React.ReactNode;
    twentyone?: React.ReactNode;
    sixtyone?: React.ReactNode;
    janLabel?: React.ReactNode;
    febLabel?: React.ReactNode;
    marLabel?: React.ReactNode;
    aprLabel?: React.ReactNode;
    mayLabel?: React.ReactNode;
    junLabel?: React.ReactNode;
    contenttwo?: React.ReactNode;
    contentfive?: React.ReactNode;
    contenteight?: React.ReactNode;
}

export default function DashboardChart11({
    chartTitle = "CHART TITLE",
    weekLabel = "This Week",
    mainValue = "5.000,00",
    ordersCounter = "50 Orders",
    sixty = "60",
    twenty = "20",
    twentyone = "-20",
    sixtyone = "-60",
    janLabel = "Jan",
    febLabel = "Feb",
    marLabel = "Mar",
    aprLabel = "Apr",
    mayLabel = "May",
    junLabel = "Jun",
    contenttwo = "Content",
    contentfive = "Content",
    contenteight = "Content",
    ...props
}: Props) {
    return (
        <div {...props} className={` ${props.className} flex items-center w-[50%] md:w-full`}>
            <div className="w-full rounded bg-background-section p-4 sm:w-full">
                <div className="flex items-start">
                    <div className="mb-2 w-full bg-background-section">
                        <div className="flex">
                            <Heading as="p" className="text-[16px] font-medium sm:text-[13px]">
                                {chartTitle}
                            </Heading>
                        </div>
                        <div className="flex w-full items-start justify-center bg-background-section">
                            <div className="flex flex-1 justify-end">
                                <Text as="p" className="!font-poppins text-[12px] font-medium">
                                    {weekLabel}
                                </Text>
                            </div>
                            <Button color="background_section" size="xs" className="w-[24px] self-center px-2">
                                <Img src="img_arrow_down.svg" width={8} height={4} />
                            </Button>
                        </div>
                    </div>
                    <div className="flex">
                        <Text
                            size="textlg"
                            as="p"
                            className="bg-gradient bg-clip-text !font-poppins text-[32px] font-normal tracking-[-1.20px] !text-transparent sm:text-[27px]"
                        >
                            {mainValue}
                        </Text>
                    </div>
                    <div className="flex">
                        <Heading as="p" className="mb-3.5 text-[16px] font-normal sm:text-[13px]">
                            {ordersCounter}
                        </Heading>
                    </div>
                    <div className="mb-2 bg-background-section">
                        <div className="flex justify-between gap-5 bg-background-section">
                            <div className="flex flex-col items-start gap-[18px] sm:gap-[18px]">
                                <Text as="p" className="text-[12px] font-normal">
                                    {sixty}
                                </Text>
                                <Text as="p" className="text-[12px] font-normal">
                                    {twenty}
                                </Text>
                                <Text as="p" className="text-[12px] font-normal">
                                    {twentyone}
                                </Text>
                                <Text as="p" className="text-[12px] font-normal">
                                    {sixtyone}
                                </Text>
                            </div>
                            <div className="flex-1 bg-background-section">
                                <Img
                                    src="img_group_2607.svg"
                                    width={518}
                                    height={104}
                                    alt="Image"
                                    className="h-[104px] w-full sm:h-auto"
                                />
                                <div className="flex">
                                    <div className="flex w-full justify-center px-[34px] sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {janLabel}
                                        </Text>
                                    </div>
                                    <div className="flex w-full justify-center px-[34px] sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {febLabel}
                                        </Text>
                                    </div>
                                    <div className="flex w-full justify-center px-8 sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {marLabel}
                                        </Text>
                                    </div>
                                    <div className="flex w-full justify-center px-[34px] sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {aprLabel}
                                        </Text>
                                    </div>
                                    <div className="flex w-full justify-center px-[34px] sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {mayLabel}
                                        </Text>
                                    </div>
                                    <div className="flex w-full justify-center px-[34px] sm:px-5">
                                        <Text size="textxs" as="p" className="text-[10px] font-normal">
                                            {junLabel}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-center gap-1 py-2">
                            <div className="mt-4 flex items-center">
                                <Img src="img_intetity_color_circle.svg" width={16} height={16} alt="Content" className="h-[16px]" />
                                <Text as="p" className="!font-poppins text-[12px] font-medium">
                                    {contenttwo}
                                </Text>
                            </div>
                            <div className="flex items-center">
                                <Img
                                    src="img_intetity_color_circle_purple_a100.svg"
                                    width={16}
                                    height={16}
                                    alt="Content"
                                    className="h-[16px]"
                                />
                                <Text as="p" className="!font-poppins text-[12px] font-medium">
                                    {contentfive}
                                </Text>
                            </div>
                            <div className="flex flex-1 items-center">
                                <Img
                                    src="img_intetity_color_circle_pink_100.svg"
                                    width={16}
                                    height={16}
                                    alt="Content"
                                    className="h-[16px]"
                                />
                                <Text as="p" className="!font-poppins text-[12px] font-medium">
                                    {contenteight}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}