import { createContext, useContext, useState } from "react";

// 1: 컨텍스트 생성
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2: 생성된 컴포넌트를 다른 컴포넌트에서 공유
export default function AuthProvider({ children }) {
  // state를 컨텍스트에 넣기
  const [number, setNumber] = useState(10);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // 10초마다 해당함수를 실행한다. 자바스크립트 함수
  // setInterval(() => {
  //   setNumber(number + 1);
  // }, 10000);

   return (
    <AuthContext.Provider
      value={{ number, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
