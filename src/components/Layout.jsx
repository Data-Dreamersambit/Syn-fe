import { useLocation } from "react-router-dom";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const fullWidthPages = ["/login", "/signup", "/404"];
  const isFullWidthPage = fullWidthPages.includes(location.pathname);

  const hideFooterPages = ["/login", "/signup"];
  const shouldHideFooter = hideFooterPages.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow">
        {isFullWidthPage ? (
          <div className="w-full">{children}</div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        )}
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
