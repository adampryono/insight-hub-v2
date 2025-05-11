import { Button, Img, Heading } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function LandingPage() {
    return (
        <div className="flex w-full flex-col items-center bg-black-900">
            <Header className="self-stretch bg-gray-600_19" />
            <div className="container-xs mt-[136px] flex flex-col items-center px-14 md:px-5">
                <div className="flex w-[72%] flex-col items-center gap-9 md:w-full">
                    <Heading
                        size="heading_h2"
                        as="h1"
                        className="!font-plusjakartasans text-[48px] font-bold leading-[120%] md:text-[44px] sm:text-[38px]"
                    >
                        <>
                            pokonya ini kaya
                            <br />
                            slogannya gtdah
                        </>
                    </Heading>
                    <Heading
                        size="body_b2"
                        as="h2"
                        className="self-stretch text-center !font-plusjakartasans text-[20px] font-normal leading-[140%]"
                    >
                        Lorem ipsum dolor sit amet consectetur. Et non morbi lorem pellentesque venenatis nunc cras. Dolor blandit amet tincidunt vulputate integer penatibus. Neque eget sit bibendum integer. Imperdiet cras nisl nam neque lorem sed.
                    </Heading>

                    <Button
                        size="xl"
                        variant="gradient"
                        color="linear_1_indigo_900"
                        leftIcon={
                            <Img
                                src="line-md_arrow-right.png"
                                width={20}
                                height={20}
                                alt="Arrow Left"
                                className="my-1 h-[20px] w-[20px] object-contain"
                            />
                        }
                        className="min-w-[130px] gap-3 rounded-[12px] px-5 font-plusjakartasans font-bold"
                    >
                        Login
                                       </Button>
                </div>
            </div>
            <Footer className="mt-60 self-stretch" />
        </div>
    );
}