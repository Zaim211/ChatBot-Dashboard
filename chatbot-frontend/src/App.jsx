import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./components/Home";
import SignIn from "./Auth/SingIn";
import SignUp from "./Auth/SignUp";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import { ToggleProvider } from "./components/store/ToggleContext";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <ToggleProvider>
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
      </Route> 
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
    </Routes>
    </UserContextProvider>
    </ToggleProvider>
  );
}

export default App;
