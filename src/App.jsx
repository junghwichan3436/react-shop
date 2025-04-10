import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Globalstyles from "./styles/GlobalStyles.styles";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./AuthContext";
//현재 로그인을 했는 지 않했는지에대한 상태관리 필요
function App() {
  // const [authenticate, setAunthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout //로그인을 할 수 있게 상태관리를 해주어야한다 어디에나 있는페이지
        />
      ),
      children: [
        {
          index: true, //아무런 동적경로가 존재하지않는 /의 경로를 사용할 수 있다
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login />,
        }, // 직접로그인이 되게끔 만들어주는 역할을 한다
        {
          path: "products/:id",
          element: <PrivateRoute />,
        }, //로그인이 되면 보여주고 로그인 이 안되면 안보여줄려면 private라우팅을 해준다
      ],
    },
  ]);
  return (
    <AuthProvider>
      <Globalstyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
