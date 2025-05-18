import React from 'react';
import { Metadata } from 'next';
import UserDashboardPage from "./index"; // <-- FIX: import from index, not page

export const metadata: Metadata = {
    title: "InsightHub"
}

export default function Page() { // <-- FIX: export default function Page
    return <UserDashboardPage />;
}