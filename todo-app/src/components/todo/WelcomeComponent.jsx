import { Link, useParams } from "react-router-dom";

export default function WelcomeComponent() {
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
