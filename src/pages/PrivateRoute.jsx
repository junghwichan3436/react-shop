import React from "react";
import { Navigate } from "react-router-dom"; //어떠한 경로로 값을 보내주는 컴포넌트
import ProductDetail from "./ProductDetail";
import { useAuth } from "../AuthContext";

const PrivateRoute = () => {
  const { authenticate } = useAuth();
  //관문의 역할을 하는 페이지가 된다
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />; // 로그인이 되었다면 프로덕트디테일 페이지로 보내주고 로그인이 되지 않았다면 로그인 페이지로 보내라라는 의미
};

export default PrivateRoute;
