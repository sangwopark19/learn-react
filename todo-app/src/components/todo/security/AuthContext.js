import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

// 1: 컨텍스트 생성
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2: 생성된 컴포넌트를 다른 컴포넌트에서 공유
export default function AuthProvider({ children }) {
  // 3: state를 컨텍스트에 넣기
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  // function login(username, password) {
  //   if (username === "username" && password === "pwd") {
  //     setIsAuthenticated(true);
  //     setUsername(username);
  //     return true;
  //   } else {
  //     setIsAuthenticated(false);
  //     setUsername(null);
  //     return false;
  //   }
  // }

  function login(username, password) {
    const baToken = `Basic ` + window.btoa(username + ":" + password);

    executeBasicAuthenticationService(baToken)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsAuthenticated(false);

    // if (username === "username" && password === "pwd") {
    //   setIsAuthenticated(true);
    //   setUsername(username);
    //   return true;
    // } else {
    //   setIsAuthenticated(false);
    //   setUsername(null);
    //   return false;
    // }
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
