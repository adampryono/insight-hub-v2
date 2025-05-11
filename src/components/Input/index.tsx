"use client";

import React from "react";

const shapes = {
    round: "rounded-[10px]",
} as const;

const variants = {
    gradient: {
        linear_1_indigo_900: "bg-gradient text-white-white_1",
    },
    outline: {
        gray_300: "border-gray-300 border border-solid text-gray-500",
    },
    fill: {
        background_section: "bg-background-section text-white-white_1",
    },
} as const;

// ...existing code...

const sizes = {
    xl: "h-[50px] px-5 text-[16px]",
    sm: "h-[24px] px-2.5 text-[12px]",
    xs: "h-[24px] px-2",
    md: "h-[40px] px-4 text-[16px]",
    lg: "h-[46px] px-5 text-[16px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
    Partial<{
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: string;
    }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "lg",
            color = "background_section",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text font-plusjakartasans text-[16px] ${shape && shapes[shape]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

export { Input };