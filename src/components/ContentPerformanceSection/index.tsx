import { Img } from "../Img";
import { Heading } from "../Heading";
import React from "react";

interface Props {
    className?: string;
    headingText?: React.ReactNode;
}

export default function ContentPerformanceSection({ headingText = "Content Performance", ...props }: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-full gap-4`}>
            <div className="h-[176px] self-stretch bg-background-section" />
            <div className="flex items-center justify-between gap-5 self-stretch">
                <div className="flex items-center gap-3">
                    <Heading size="heading_h5" as="h5" className="!font-plusjakartasans text-[20px] font-bold">
                        {headingText}
                    </Heading>
                    <Img src="user-profile.png" width={20} height={20} alt="Content" className="h-[20px]" />
                    <Img src="user-profile.png" width={20} height={20} alt="Content" className="h-[20px]" />
                </div>
            </div>
        </div>
    );
}