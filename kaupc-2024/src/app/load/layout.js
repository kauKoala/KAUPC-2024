import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "KAUPC:2024",
    description: "kaupc:2024 promotion page",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
