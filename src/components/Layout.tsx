import { ReactNode } from "react";
import Header from "./Header";
import SeparatorLine from "./SeparatorLine";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-dark-color">
      <Header />
      <SeparatorLine />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;