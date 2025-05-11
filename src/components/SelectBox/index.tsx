"use client";

import React from "react";
import Select, { Props } from "react-select";

const shapes = {
    square: "rounded-[8px]",
} as const;

const variants = {
    fill: {
        background_section: "bg-background-section text-white-white_1",
    },
} as const;

const sizes = {
    xs: "h-[24px] px-2.5 text-[12px]",
} as const;

// Define valid combinations of variant and color
type VariantColorMap = {
    [K in keyof typeof variants]: keyof typeof variants[K];
};
type selectOptionType = { value: string; label: React.ReactNode };

type SelectProps = Omit<Props, "getOptionLabel"> & 
    Partial<{
        className: string;
        options: selectOptionType[];
        isSearchable: boolean;
        isMulti: boolean;
        onChange: (option: any) => void;
        value: string;
        indicator: React.ReactElement;
        getOptionLabel: (e: any) => string;
        children: React.ReactNode;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: VariantColorMap[keyof VariantColorMap];
    }>;

const SelectBox = React.forwardRef<any, SelectProps>(
    (
        {
            children,
            className = "",
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            variant = "fill",
            size = "xs",
            color = "background_section",
            ...restProps
        },
        ref,
    ) => {
        const [menuPortalTarget, setMenuPortalTarget] = React.useState<HTMLElement | null>(null);

        React.useEffect(() => {
            setMenuPortalTarget(document.body);
        }, []);

        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        indicatorsContainer: (provided) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": { padding: 0 },
                        }),
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                            alignItems: "center",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            display: "flex",
                            minWidth: "max-content",
                            width: "100%",
                            backgroundColor: state.isSelected ? "#ffffff33" : "transparent",
                            color: state.isSelected ? "#6c757d" : "inherit",
                            "&:hover": {
                                backgroundColor: "#ffffff33",
                                color: "#6c757d",
                            },
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                            flexWrap: undefined,
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                        menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
                    }}
                    menuPortalTarget={menuPortalTarget}
                    closeMenuOnScroll={(event: any) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    },
);

export { SelectBox };