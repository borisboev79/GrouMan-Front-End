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
import AddGroup from "./components/AddGroup";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/menu"  element={<Menu />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/misc" element={<Miscellaneous />} />
        <Route path="/groups/add" element={<AddGroup />} />
      </Routes>

      {/* <Menu /> */}

      <One />

      {/* <Two /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
