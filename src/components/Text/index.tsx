import React from "react";

const sizes = {
    textxl: "text-[32px] font-normal md:text-[30px] sm:text-[28px]",
    textxs: "text-[10px] font-normal",
    texts: "text-[12px] font-normal",
    textlg: "text-[32px] font-normal md:text-[30px] sm:text-[28px]",
} as const;

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "texts",
    ...restProps
}) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-white-white_1 font-inter ${className} ${sizes[size as keyof typeof sizes]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
    };
    
    export { Text };