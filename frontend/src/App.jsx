import { Route, Routes } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Pages/Home";
import UserLogin from "./Pages/UserLogin";
import UserReg from "./Pages/UserReg";
import ManageUserProfile from "./Pages/ManageUserProfile";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/manage-profile" element={<ManageUserProfile/>}/>
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/user-registration" element={<UserReg/>}/>
    </Routes>
    </>
  );
}

export default App;
