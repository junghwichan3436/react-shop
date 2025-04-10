import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //자식녀석에게 무언갈 뿌려주는 역할
  const [authenticate, setAunthenticate] = useState(false);
  return (
    <AuthContext.Provider value={{ authenticate, setAunthenticate }}>
      {children}
    </AuthContext.Provider> //AuthContext.Provider 이걸 사용하게 된다면 자식요소에게 무언가를 뿌려줄 수 있다
  );
};

export const useAuth = () => useContext(AuthContext);

//usecontext 우리가 무언가의 값을 받아서 쓸 수 있는 훅 함수
