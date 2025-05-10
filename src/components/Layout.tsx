import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-dark-color">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;