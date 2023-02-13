import { ReactNode } from "react";
import Navbar from "@components/Navbar/Navbar";
import navLink from "@components/Navbar/components/data";
import DarkMode from "@components/darkMode/DarkLightMode";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      <DarkMode />
      <main {...props}>{children}</main>
    </>
  );
};
export default Layout;
