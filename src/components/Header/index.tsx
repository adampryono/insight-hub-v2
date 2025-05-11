import { Button } from "../Button";
import { Img } from "../Img";
import React from "react";

interface Props {
    className?: string;
}

export default function Header({ ...props }: Props) {
    return (
        <header {...props} className={`${props.className} flex justify-center items-center p-5`}>
            <div className="mx-auto flex w-full max-w-[1238px] items-center justify-between gap-5">
                <div className="flex rounded-[20px] p-5">
                    <Img
                        src="InsightHub.png"
                        width={86}
                        height={20}
                        alt="Headerlogoone"
                        className="h-[20px] w-[86px] object-contain"
                    />
                </div>
                <Button
                    color="background_section"
                    size="lg"
                    leftIcon={
                        <Img
                            src="line-md_arrow-right.png"
                            width={20}
                            height={20}
                            alt="Arrow right"
                            className="h-[20px] w-[20px] object-contain"
                        />
                    }
                    className="min-w-[116px] gap-3 rounded-[12px] bg-gradient px-5 font-plusjakartasans font-bold text-white-white_1"
                >
                    Login
                </Button>
            </div>
        </header>
    );
}