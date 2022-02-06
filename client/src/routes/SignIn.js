import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const validateLogin = (inputUsername, inputPassword) => {
    if (inputUsername === "Joe" && inputPassword === "1234") {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      return navigate("/home");
    }
  }, [loggedIn]);

  return (
    <div>
      <h1>Sign In Page</h1>
      <label htmlFor="name">Username</label>
      <input
        type="text"
        id="name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          console.log(username);
        }}
      />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
      />
      <Button onClick={() => validateLogin(username, password)}>Sign In</Button>
    </div>
  );
};

export default SignIn;
