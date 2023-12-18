import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

// 1: 컨텍스트 생성
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2: 생성된 컴포넌트를 다른 컴포넌트에서 공유
export default function AuthProvider({ children }) {
  // 3: state를 컨텍스트에 넣기
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);

  const [token, setToken] = useState(null);

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

  async function login(username, password) {
    const baToken = `Basic ` + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log("인터셉트하고 토큰을 추가");
          config.headers.Authorization = baToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthenticated(false);
    setToken(null);
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
