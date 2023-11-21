import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthContext from './contexts/AuthContext';
import * as authService from './services/authService';

import Path from './paths';
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

import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
  }

  const closeLoginHandler = () => {
    setShowLogin(false);
    navigate('/home');
  }

  const navigate = useNavigate();
  const [auth, setAuth] = useState({});



  const loginSubmitHandler = async (values) => {
  
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    navigate(Path.Groups);
  }

  const values = {
    loginSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,

  }

  return (
    <AuthContext.Provider value={values}>

   
    <div>
      <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
      {showMenu && <Menu toggle={closeMenuHandler} />}
      {/* {showLogin && <LoginForm loginHandler={loginSubmitHandler} close={closeLoginHandler} />} */}

      <Routes>
       {showLogin && <Route path="/users/login"  element={<LoginForm loginHandler={loginSubmitHandler} close={closeLoginHandler} />} />}
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/misc" element={<Miscellaneous />} />
        <Route path="/users" element={<UserList />}/>
        <Route path="/groups/add" element={<AddGroup />} />
        <Route path="/groups/:groupId" element={<GroupDetails />} />
      </Routes>
    
      <One />

      <Footer />
      </div>

     </AuthContext.Provider>
  );
}

export default App;
