import {Routes, Route, Navigate} from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
  return (
    <UserProvider>

        <NavBar/>
        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="About" element={<AboutPage />} />

          <Route path="/*" element={<Navigate to={"/about"} />} />
        </Routes>
    
    </UserProvider>
  )
}
