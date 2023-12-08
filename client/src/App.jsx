import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
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
const Users = lazy(() => import("./components/users/UserList"));

import AuthGuard from "./guards/AuthGuard";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";

import UserEditForm from "./components/edit-user/UserEditForm";
import EditGroup from "./components/edit-group/EditGroup";
import GuestEditForm from "./components/edit-guest/GuestEditForm";

import Logout from "./components/logout/Logout";
import Footer from "./components/footer/Footer";

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
    navigate(Path.Home);
  };

  return (
    <AuthProvider>
      <GuestContextProvider>
        <div>
          <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
          {showMenu && <Menu toggle={closeMenuHandler} />}
          <Suspense fallback={<h1>Users are loading...</h1>}>
            <Routes>
              {showLogin && (
                <Route
                  path={Path.Login}
                  element={<LoginForm close={closeLoginHandler} />}
                />
              )}
              <Route path={Path.Index} element={<Banner />} />
              <Route path={Path.RegisterUser} element={<RegisterForm />} />
              <Route path={Path.Groups} element={<Groups />} />
              <Route path={Path.Home} element={<Banner />} />

              <Route
                path={Path.GroupDetails}
                element={<GroupDetailWrapper />}
              />

              <Route element={<AuthGuard />}>
                <Route path={Path.Users} element={<Users />} />
                <Route path={Path.EditGuest} element={<GuestEditForm />} />
                <Route path={Path.AddGroup} element={<AddGroup />} />
                <Route path={Path.EditGroup} element={<EditGroup />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path={Path.AddGuest} element={<GuestAddForm />} />
                <Route path={Path.EditUser} element={<UserEditForm />} />
              </Route>

              <Route path={Path.NotFound} element={<NotFound404 />} />
            </Routes>
          </Suspense>
          <One />

          <Footer />
        </div>
      </GuestContextProvider>
    </AuthProvider>
  );
}

export default App;
