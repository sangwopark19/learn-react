import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
      {/* <LoginComponent></LoginComponent>
      <WelcomeComponent></WelcomeComponent> */}
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "username" && password === "pwd") {
      console.log("Success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  //   function SuccessMessageComponent() {
  //     if (showSuccessMessage) {
  //       return <div className="successMessage">Authenticate SuccessFully</div>;
  //     }
  //     return null;
  //   }

  //   function ErrorMessageComponent() {
  //     if (showErrorMessage) {
  //       return (
  //         <div className="errorMessage">
  //           Authenticate Failed. Please check your credentials.
  //         </div>
  //       );
  //     }
  //     return null;
  //   }

  return (
    <div className="Login">
      <h1>Time to Login!</h1>
      {showSuccessMessage && (
        <div className="successMessage">Authenticate SuccessFully</div>
      )}
      {/* <SuccessMessageComponent /> */}
      {showErrorMessage && (
        <div className="errorMessage">
          Authenticate Failed. Please check your credentials.
        </div>
      )}
      {/* <ErrorMessageComponent /> */}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="Welcom">
      <h1>환영합니다 {username}님.</h1>
      <div>Welcome Component</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>복구에 노력 중입니다!</h1>
      <div>
        하지만 죄송하게도 404 오류입니다. 문의는 여기로 주세요 010-2222-2222
      </div>
    </div>
  );
}

function ListTodosComponent() {
  const todos = [
    { id: 1, description: "AWS 공부" },
    { id: 2, description: "풀스택 개발 공부" },
    { id: 3, description: "DevOps 공부" },
  ];
  return (
    <div className="ListTodosComponent">
      <h1>할일 목록</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
