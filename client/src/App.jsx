import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./contexts/authContext";

import Path from "./paths";
import NotFound404 from "./components/NotFound404";
import Navbar from "./components/header/Navbar";
import Menu from "./components/menu/Menu";
import One from "./components/One";
import Banner from "./components/banner/Banner";

import Groups from "./components/groups/Groups";
import GroupDetails from "./components/groups/GroupDetails";
import AddGroup from "./components/add-group/AddGroup";
import GuestAddForm from "./components/guests/GuestAddForm";

import UserList from "./components/UserList";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/logout/Logout";

import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/footer/Footer";
import GroupDetailWrapper from "./components/guests/GroupDetailWrapper";

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
      <div>
        <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
        {showMenu && <Menu toggle={closeMenuHandler} />}

        <Routes>
          {showLogin && (
            <Route
              path="/users/login"
              element={<LoginForm close={closeLoginHandler} />}
            />
          )}
          <Route path="/" element={<Banner />} />
          <Route path="/users/register" element={<RegisterForm />} />
          <Route path={Path.Groups} element={<Groups />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/misc" element={<Miscellaneous />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/groups/add" element={<AddGroup />} />
          <Route path={Path.GroupDetails} element={<GroupDetailWrapper/>} />
          <Route path={Path.AddGuest} element={<GuestAddForm />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>

        <One />

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
