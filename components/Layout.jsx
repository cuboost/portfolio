import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Cuboost Portfolio</title>
                <meta name="description" content="Cuboost Portfolio, learn about the developper..." />
                <meta name="author" content="Cuboost" />
                {/* Color */}
                <meta name="theme-color" content="#38b2ac"></meta>
                {/* Favicon */}
                <link rel="icon" href="/images/icons/favicon.ico" />
            </Head>
            <main className=" m-auto w-10/12 md:w-9/12 lg:w-8/12">
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
};

export default Layout;