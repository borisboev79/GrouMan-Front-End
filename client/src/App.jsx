import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import { AuthProvider } from "./contexts/authContext";
// import * as authService from "./services/authService";
// import * as userService from "./services/userService";

import Path from "./paths";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import One from "./components/One";
import Banner from "./components/Banner";

import Groups from "./components/Groups";
import GroupDetails from "./components/GroupDetails";
import AddGroup from "./components/AddGroup";

import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/Logout";

import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/Footer";
// import { AuthProvider } from "./contexts/AuthContext";

function App() {
 const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
 const navigate = useNavigate();

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  const closeLoginHandler = () => {
    setShowLogin(false);
    navigate("/home");
  };

  
  // const [auth, setAuth] = useState(() => {
  //   localStorage.removeItem('accessToken');

  //   return {};
  // });

  // const loginSubmitHandler = async (values) => {
  //   const result = await authService.login(values.email, values.password);

  //   setAuth(result);

  //   localStorage.setItem('accessToken', result.accessToken);

  //   navigate(Path.Groups);
  // };

  // const registerSubmitHandler = async (values) => {
  //   const result = await authService.register(
  //     values.firstName,
  //     values.lastName,
  //     values.email,
  //     values.username,
  //     values.password,
  //     values.office
  //   );

  //   setAuth(result);

  //   localStorage.setItem('accessToken', result.accessToken);

  //   navigate(Path.Home);

  // };

  // const localRegister = async (values) => {
  //   await userService.add(
  //     values.firstName,
  //     values.lastName,
  //     values.email,
  //     values.username,
  //     values.password,
  //     values.office
  //   );
  // };


  // const logoutHandler = () => {
  //   setAuth({});

  //   localStorage.removeItem('accessToken');

  // }

  // const values = {
  //   loginSubmitHandler,
  //   registerSubmitHandler,
  //   localRegister,
  //   logoutHandler,
  //   username: auth.username || auth.email,
  //   email: auth.email,
  //   isAuthenticated: !!auth.email,
  // };

  return (
    <AuthProvider>
      <div>
        <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
        {showMenu && <Menu toggle={closeMenuHandler} />}

        <Routes>
          {showLogin && (
            <Route
              path="/users/login"
              element={
                <LoginForm
                      close={closeLoginHandler}
                  loginHandler={loginSubmitHandler}
            
                />
              }
            />
          )}
          <Route path="/users/register" element={<RegisterForm />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/misc" element={<Miscellaneous />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/groups/add" element={<AddGroup />} />
          <Route path="/groups/:groupId" element={<GroupDetails />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>

        <One />

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
