import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Groups from "./components/Groups";
import Miscellaneous from "./components/Miscellaneous";
import One from "./components/One";
import Two from "./components/Two";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddGroup from "./components/AddGroup";
import GroupDetails from "./components/GroupDetails";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
         setShowMenu(true); 
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  }

  return (
    <div>
      <Navbar toggle={showMenuHandler}/>
      {showMenu && <Menu toggle={closeMenuHandler} />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/misc" element={<Miscellaneous />} />
        <Route path="/groups/add" element={<AddGroup />} />
        <Route path="/groups/details" element={<GroupDetails />} />
      </Routes>

      <One />

      {/* <Two /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
