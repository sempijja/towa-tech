
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
