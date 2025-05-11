import { Button } from "../Button";
import { Img } from "../Img";
import { Heading } from "../Heading";

import React from "react";

interface Props {
    className?: string;
    userId?: React.ReactNode;
    userDescription?: React.ReactNode;
    userPhoneNumber?: React.ReactNode;
    userGender?: React.ReactNode;
    edit?: string;
}

export default function UserProfile1({
    userId = "1",
    userDescription = "Lorem ipsu dolor s...",
    userPhoneNumber = "12345678900",
    userGender = "Perempuan",
    edit = "Edit",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex items-center self-stretch p-2 md:px-5 bg-background-section flex-1`}
        >
            <div className="flex w-full items-end px-4 sm:w-full">
                <div className="flex w-[52%] items-center gap-[34px]">
                    <div className="flex w-[52%] flex-wrap justify-between gap-5">
                        <Heading size="body_b5" as="h6" className="!font-plusjakartasans text-[16px] font-semibold sm:text-[13px]">
                            {userId}
                        </Heading>
                        <Heading size="body_b5" as="h6" className="!font-plusjakartasans text-[16px] font-semibold sm:text-[13px]">
                            {userDescription}
                        </Heading>
                    </div>
                </div>
                <Heading size="body_b5" as="h6" className="!font-plusjakartasans text-[16px] font-semibold sm:text-[13px]">
                    {userPhoneNumber}
                </Heading>
            </div>
            <Heading size="body_b5" as="h6" className="!font-plusjakartasans text-[16px] font-semibold sm:text-[13px]">
                {userGender}
            </Heading>
            <Button
                size="lg"
                shape="round"
                leftIcon={
                    <Img
                        src="img_document_24_outline.svg"
                        width={16}
                        height={16}
                        alt="Document / 24 / Outline"
                        className="h-[16px] w-[16px] object-contain"
                    />
                }
                className="ml-[98px] min-w-[72px] gap-2 self-center rounded-md px-2.5 font-plusjakartasans font-semibold"
            >
                {edit}
            </Button>
        </div>

    );
}