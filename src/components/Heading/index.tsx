import React from "react";

const sizes = {
    headingxs: "text-[20px] font-semibold",
    headings: "text-[24px] font-bold md:text-[22px]",
    heading_h5: "font-plusjakartasans text-[20px] font-bold",
    heading_h2: "font-plusjakartasans text-[48px] font-bold md:text-[44px] sm:text-[38px]",
    body_b4: "font-plusjakartasans text-[20px] font-semibold",
    bold_headings_h1: "font-plusjakartasans text-[36px] font-bold md:text-[34px] sm:text-[32px]",
    semi_bold_headings_s5: "font-plusjakartasans text-[20px] font-semibold",
    heading_h3: "font-plusjakartasans text-[32px] font-bold md:text-[30px] sm:text-[28px]",
    body_b5: "font-plusjakartasans text-[16px] font-semibold",
    heading_h6: "font-plusjakartasans text-[16px] font-bold",
    body_b2: "text-[16px] font-bold",
    textmd: "text-[16px] font-medium",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "textmd",
    as,
    ...restProps
}) => {
    const Component = as || "h6";

    return (
        <Component
            className={`text-white-white_1 font-poppins ${className} ${sizes[size] as keyof typeof sizes}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };