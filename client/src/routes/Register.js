import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/svg/logo.png";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Register = () => {
  const [values, setValues] = useState({});
  const [registered, setRegistered] = useState(false);

  const navigate = useNavigate();

  const handleTextInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const emailReg = /.+@.+((com)|(ca))/;

  const handleRegister = (username, email, password) => {
    if (
      username !== "Joe" &&
      password &&
      password.length > 0 &&
      emailReg.test(email)
    ) {
      console.log(
        "Registering the following:\n",
        username,
        "\n",
        email,
        "\n",
        password,
        "\n"
      );
      setRegistered(true);
    }
  };

  useEffect(() => {
    if (registered) {
      return navigate("/home");
    }
  }, [registered]);

  const titleStyles = {
    fontFamily: "Montserrat",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#000000",
  };

  return (
    <div>
      <img alt="puzzle piece" src={Logo} />
      <h1 style={titleStyles}>Find your missing pieces.</h1>
      <TextInput
        name="username"
        value={values["username"]}
        onChange={handleTextInputChange}
      >
        Username
      </TextInput>
      <TextInput
        name="email"
        type="email"
        value={values["email"]}
        onChange={handleTextInputChange}
      >
        Email
      </TextInput>
      <TextInput
        name="password"
        type="password"
        value={values["password"]}
        onChange={handleTextInputChange}
      >
        Password
      </TextInput>
      <Button
        onClick={() =>
          handleRegister(
            values["username"],
            values["email"],
            values["password"]
          )
        }
      >
        Register
      </Button>
    </div>
  );
};

export default Register;
