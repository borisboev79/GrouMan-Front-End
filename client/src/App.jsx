import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Groups from "./components/Groups";
import Miscellaneous from "./components/Miscellaneous";
import One from "./components/One";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddGroup from "./components/AddGroup";
import GroupDetails from "./components/GroupDetails";
//import SomeContext from './contexts/SomeContext'

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
  }

  return (
  //  <SomeContext.Provider>

   
    <div>
      <Navbar toggle={showMenuHandler} showLogin={showLoginHandler} />
      {showMenu && <Menu toggle={closeMenuHandler} />}
      {showLogin && <LoginForm close={closeLoginHandler} />}

      <Routes>
        {/* <Route path="/users/login"  element={<LoginForm />} /> */}
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/misc" element={<Miscellaneous />} />
        <Route path="/groups/add" element={<AddGroup />} />
        <Route path="/groups/:groupId" element={<GroupDetails />} />
      </Routes>
    
      <One />

      <Footer />
      </div>

 //    </SomeContext.Provider>
  );
}

export default App;
