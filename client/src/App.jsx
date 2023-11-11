import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Groups from "./components/Groups";
import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/Footer";
import One from "./components/One";
import Two from "./components/Two";
import Banner from "./components/Banner";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/menu" element={<Menu2 />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      <Banner />
  
      {/* <One /> */}
   
      {/* <Two /> */}

      <Groups />

      {/* <Miscellaneous /> */}
     
      <Footer />
     
    </div>
  );
}

export default App;
