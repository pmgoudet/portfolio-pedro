import { ReactNode } from "react";
import Header from "./Header";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-dark-color">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;