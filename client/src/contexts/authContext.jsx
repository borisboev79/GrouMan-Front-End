import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import * as userService from "../services/userService";
import usePersistedState from "../hooks/usePersistedState";

import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = usePersistedState("auth", {});

  const [status, setStatus] = useState("");

  const statusToggler = () => {
    if (status !== "") {
      setStatus("");
    }
  };

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate(Path.Groups);
    } catch (error) {
      setStatus(error.message);

      console.error("Couldn't log in because", error.message);
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
    const result = await authService.register(
      values.firstName,
      values.lastName,
      values.email,
      values.username,
      values.password,
      values.office
    );

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);} catch (error) {
      setStatus(error.message);
      console.error("Register user failed: ", error.message);
     
    }
  };

  const localRegister = async (values) => {
    await userService.add(
      values.firstName,
      values.lastName,
      values.email,
      values.username,
      values.password,
      values.office
    );
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    localRegister,
    logoutHandler,
    username: auth.username || auth.email,
    userId: auth._id,
    email: auth.email,
    isAuthenticated: !!auth.email,
    message: auth.message,
    status,
    statusToggler,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
