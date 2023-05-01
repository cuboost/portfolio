import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    return (
        <div>
            <div className=" m-auto w-10/12 md:w-9/12 lg:w-8/12">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;