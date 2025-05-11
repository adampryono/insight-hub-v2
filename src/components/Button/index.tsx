import React from "react";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-md",
} as const;

const variants = {
    fill: {
        background_section: "bg-background_section",
        white_A700_33: "bg-white-a700_33 text-white_white_1",
    },
    gradient: {
        linear_1_indigo_900: "bg-gradient text-white-white_1",
    },
} as const;

const sizes = {
    xl: "h-[52px] px-5 text-[20px]",
    xs: "h-[24px] px-2",
    lg: "h-[46px] px-5 text-[16px]",
    md: "h-[42px] px-[34px] text-[16px]",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "onClick"
> &
    Partial<{
        className: string;
        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;
        onClick: () => void;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: string;
    }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "md",
    color = "white_A700_33",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );

};

export { Button };