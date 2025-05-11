import { Button } from "../Button";
import React from "react";

interface Props {
    className?: string;
    prevButtonText?: string;
    oneButtonText?: string;
    twoButtonText?: string;
    threeButtonText?: string;
    fourButtonText?: string;
    nextButtonText?: string;
}

export default function PaginationButtons({
    prevButtonText = "Prev",
    oneButtonText = "1",
    twoButtonText = "2",
    threeButtonText = "3",
    fourButtonText = "4",
    nextButtonText = "Next",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-center w-[30%] md:w-full gap-1 md:px-5`}>
            <Button
                shape="round"
                className="flex-1 rounded border border-solid border-blue_gray-50_19 px-[15px] !text-blue_gray-100"
            >
                {prevButtonText}
            </Button>
            <Button variant="gradient" shape="round" color="linear_1_indigo_900" className="min-w-[40px] rounded px-4">
                {oneButtonText}
            </Button>
            <Button
                shape="round"
                className="min-w-[42px] rounded border border-solid border-blue_gray-50_19 px-[15px] !text-gray-600"
            >
                {twoButtonText}
            </Button>
            <Button
                shape="round"
                className="min-w-[42px] rounded border border-solid border-blue_gray-50_19 px-[15px] !text-gray-600"
            >
                {threeButtonText}
            </Button>
            <Button
                shape="round"
                className="min-w-[42px] rounded border border-solid border-blue_gray-50_19 px-[15px] !text-gray-600"
            >
                {fourButtonText}
            </Button>
            <Button
                shape="round"
                className="flex-1 rounded border border-solid border-blue_gray-50_19 px-[15px] !text-gray-600"
            >
                {nextButtonText}
            </Button>
        </div>
    );
}