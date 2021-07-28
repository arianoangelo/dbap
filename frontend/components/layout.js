import Nav from "./nav";
import Footer from "./footer";

const Layout = ({categories, children, global, seo}) => (
    <>
        <Nav categories={categories} global={global}/>
        {children}
        <Footer/>
    </>
);

export default Layout;