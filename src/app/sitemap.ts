import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/landing`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/signup`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/userdashboard`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboardview`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboardedit`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/publicdashboard`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },

    ];
}