import { Img } from "../Img";
import { Heading } from "../Heading";
import { Text } from "../Text";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}
export default function Footer({ ...props }: Props) {
    return (
        <footer {...props} className={`${props.className} flex justify-center items-center py-8 sm:py-5 bg-gray-600_19`}>
            <div className="container-xs flex justify-center px-14 md:px-5">
                <div className="flex w-[94%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex w-[22%] flex-col justify-center gap-2 self-center sm:w-full">
                        <div className="flex flex-col items-start gap-3">
                            <Heading
                                size="headings"
                                as="h4"
                                className="bg-gradient bg-clip-text text-[24px] font-bold !text-transparent md:text-[22px]"
                            >
                                CONTACT US
                            </Heading>
                            <div className="flex self-stretch">
                                <Link href="mailto:akowkakwo@gmail.com" target="_blank" rel="noreferrer" className="self-end">
                                    <Heading size="textmd" as="h5" className="text-[18px] font-normal" style={{ color: 'rgba(255, 255, 255, 0.5)'}}>
                                        akowkakwo@gmail.com
                                    </Heading>
                                </Link>
                            </div>
                            <div className="flex">
                                <Text size="texts" as="p" className="text-[18px] font-normal" style={{ color: 'rgba(255, 255, 255, 0.5)'}}>
                                    +62 88888888888
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <Heading
                            size="headings"
                            as="h4"
                            className="bg-gradient bg-clip-text text-[24px] font-bold !text-transparent md:text-[22px]"
                        >
                            FOLLOW US
                        </Heading>
                        <div className="flex gap-5">
                            <Img src="mdi_github.png" width={32} height={32} alt="Mdigithubbone" className="h-[32px]" />
                            <Img src="mdi_instagram.png" width={32} height={32} alt="Mdiinstagram" className="h-[32px]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}