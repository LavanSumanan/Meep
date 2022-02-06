import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const SignIn = () => {
  const [values, setValues] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const validateLogin = (username, password) => {
    if (username === "Joe" && password === "1234") {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      return navigate("/home");
    }
  }, [loggedIn]);

  const handleTextInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h1>Meep.</h1>
      <TextInput
        name="username"
        onChange={handleTextInputChange}
        value={values["username"]}
      >
        Username
      </TextInput>
      <TextInput
        name="password"
        type="password"
        onChange={handleTextInputChange}
        value={values["password"]}
      >
        Password
      </TextInput>
      <Button
        onClick={() => validateLogin(values["username"], values["password"])}
      >
        Sign In
      </Button>
      <Link to={"/register"}>Sign Up</Link>
      <Link to={"/"}>Forgot Password</Link>
    </div>
  );
};

export default SignIn;
