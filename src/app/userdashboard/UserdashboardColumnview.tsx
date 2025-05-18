import ContentPerformanceSection from "@/components/ContentPerformanceSection";
import React, { Suspense } from "react";

const data = [
    { headingText: "Content Performance" },
    { headingText: "Content Performance" },
    { headingText: "Content Performance" },
    { headingText: "Content Performance" },
    { headingText: "Content Performance" },
    { headingText: "Content Performance" },
];

export default function UserdashboardColumnview() {
    return (
        <div className="mt-6">
            <div className="grid grid-cols-3 justify-center gap-[62px] gap-y-[62px] md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                    <ContentPerformanceSection {...d} key={"gridview" + index} />
                ))}
                </Suspense>
            </div>
        </div>
    );
}
