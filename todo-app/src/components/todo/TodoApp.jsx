import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
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
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
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
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    { id: 1, description: "AWS 공부", done: false, targetDate: targetDate },
    {
      id: 2,
      description: "풀스택 개발 공부",
      done: false,
      targetDate: targetDate,
    },
    { id: 3, description: "DevOps 공부", done: false, targetDate: targetDate },
  ];
  return (
    <div className="ListTodosComponent">
      <h1>할일 목록</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (
    <div className="header">
      Header <hr />
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="footer">
      <hr /> Footer
    </div>
  );
}

function LogoutComponent() {
  return (
    <div className="LogoutComponent">
      <h1>You are logged out!</h1>
      <div>Thank you for using our App. Come back soon! </div>
    </div>
  );
}
