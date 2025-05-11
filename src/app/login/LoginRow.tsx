"use client";

import { Button, Input, Heading } from "@/components"; 
import React from "react";

export default function LoginRow() {
    return (
        <div className="flex justify-center">
        <div className="container-xs flex justify-center px-2.5 md:px-5">
            <div className="flex w-full flex-col items-center gap-14 rounded-[20px] bg-background-section px-14 py-[58px] shadow-xs md:p-5 sm:gap-7">
                <div className="flex w-[46%] flex-col items-center gap-2 md:w-full">
                    <Heading 
                        size="bold_headings_h1" 
                        as="h1"
                        className="!font-plusjakartasans text-[36px] font-medium md:text-[34px] sm:text-[32px]"
                    >
                        Selamat datang!
                    </Heading>
                    <Heading
                        size="semi_bold_headings_s5"
                        as="h2"
                        className="self-stretch text-center !font-plusjakartasans text-[16px] font-light leading-[120%]"
                    >
                        Masukkan username dan password untuk masuk ke dalam akun
                    </Heading>
                </div>
                <div className="flex w-[46%] flex-col gap-14 md:w-full sm:gap-7">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col items-start gap-1.5">
                                <Heading size="body_b4" as="h3" className="!font-plusjakartasans text-[20px] font-light">
                                    Username
                                </Heading>
                                <Input
                                    size="md"
                                    shape="round"
                                    name="userName" 
                                    placeholder="Placeholder"
                                    className="self-stretch rounded-[10px] border border-solid border-gray-300 px-4 font-semibold !text-gray-500"
                                />
                            </div>
                            <div className="flex flex-col items-start gap-1.5">
                                <Heading size="body_b4" as="h4" className="!font-plusjakartasans text-[20px] font-light">
                                    Password
                                </Heading>
                                <Input
                                    size="md"
                                    shape="round"
                                    type="password"
                                    name="password"
                                    placeholder="Placeholder"
                                    className="self-stretch rounded-[10px] border border-solid border-gray-300 px-4 font-semibold !text-gray-500"
                                />
                            </div>
                        </div>
                        <Button
                            variant="gradient"
                            color="linear_1_indigo_900"
                            className="self-stretch rounded-[12px] px-[34px] font-plusjakartasans font-bold sm:px-5"
                        >
                            Login
                        </Button>
                </div>
            </div>
        </div>
    </div>
    );
}