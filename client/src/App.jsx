import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./contexts/authContext";
import { GuestContextProvider } from "./contexts/guestContext";

import Path from "./paths";
import NotFound404 from "./components/404/NotFound404";
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/Menu";
import One from "./components/One";
import Banner from "./components/banner/Banner";

import Groups from "./components/groups/Groups";
import GroupDetailWrapper from "./components/guests/GroupDetailWrapper";
import AddGroup from "./components/add-group/AddGroup";
import GuestAddForm from "./components/guests/GuestAddForm";

import UserList from "./components/users/UserList";
import AuthGuard from "./components/guards/AuthGuard";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import Logout from "./components/logout/Logout";

import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/footer/Footer";
import EditGroup from "./components/edit-group/EditGroup";
import GuestEditForm from "./components/edit-guest/GuestEditForm";

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

  return (
  
      <AuthProvider>
          <GuestContextProvider>
        <div>
          <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
          {showMenu && <Menu toggle={closeMenuHandler} />}

          <Routes>
            {showLogin && (
              <Route
                path={Path.Login}
                element={<LoginForm close={closeLoginHandler} />}
              />
            )}
            <Route path="/" element={<Banner />} />
            <Route path="/users/register" element={<RegisterForm />} />
            <Route path={Path.Groups} element={<Groups />} />
            <Route path="/home" element={<Banner />} />
            <Route path="/misc" element={<Miscellaneous />} />
            <Route path="/users" element={<UserList />} />

            <Route path={Path.GroupDetails} element={<GroupDetailWrapper />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.EditGuest} element={<GuestEditForm />} />

              <Route path="/groups/add" element={<AddGroup />} />
              <Route path={Path.EditGroup} element={<EditGroup />} />
              <Route path={Path.Logout} element={<Logout />} />
              <Route path={Path.AddGuest} element={<GuestAddForm />} />
            </Route>

            <Route path="*" element={<NotFound404 />} />
          </Routes>

          <One />

          <Footer />
        </div>
          </GuestContextProvider>
      </AuthProvider>
  
  );
}

export default App;
