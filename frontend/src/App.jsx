import { Route, Routes } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UserLogin from "./Pages/UserLogin";
import UserReg from "./Pages/UserReg";
import ManageUserProfile from "./Pages/ManageUserProfile";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";
import SearchDonor from "./Pages/SearchDonor";
import SearchBloodBank from "./Pages/SearchBloodBank";

function App() {
  return (
    <>
    <Routes>
      <Route path="/user-registration" element={<UserReg/>}/>
      <Route path="/user-login" element={<UserLogin/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/terms-and-conditions" element={<Terms/>}/>
      <Route path="/privacy-policy" element={<Policy/>}/>
      <Route path="/search-donor" element={<SearchDonor/>}/>
      <Route path="/search-blood-bank" element={<SearchBloodBank/>}/>
      <Route path="/manage-profile" element={<ManageUserProfile/>}/>
    </Routes>
    </>
  );
}

export default App;
