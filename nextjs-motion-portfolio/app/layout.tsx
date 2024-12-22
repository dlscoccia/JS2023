import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import './globals.css';

const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Motion Landing Page',
    description: 'Excercise for Motion',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${urbanist.className} antialiased`}>
                <Navbar />
                <Header />
                {children}
            </body>
        </html>
    );
}
