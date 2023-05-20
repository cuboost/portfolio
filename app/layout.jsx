import Footer from "./Footer";
import Navbar from "./Navbar";

import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Cuboost Portfolio',
    description: 'Cuboost Portfolio, learn about the developper...',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`m-auto w-10/12 md:w-9/12 lg:w-8/12 min-h-screen ${openSans.className}`}>
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    );
}