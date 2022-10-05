// import "styles/globals.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import Blog from "../../screens/blog/blog";

function Layout({children , preview}) {
    preview&&console.log('preview')
    return (
        <div className="layout">
            <Header/>
            <main>
            {children}
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;
