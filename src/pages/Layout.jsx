import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ authenticate, setAunthenticate }) => {
  return (
    // 로그인을 관리해주는 함수
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
