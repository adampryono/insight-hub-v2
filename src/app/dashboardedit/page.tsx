import React from 'react';
import { Metadata } from 'next';
import DashboardViewPage from "./index"; // <-- FIX: import from index, not page

export const metadata: Metadata = {
    title: "InsightHub"
}

export default function DashboardEditPage() { // <-- FIX: export default function Page
    return <DashboardViewPage />;
}