import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import './styles/main.css'
import Footer from "./components/Footer";
import Places from "./components/Places/Places";
import Suppliers from "./components/Suppliers/Suppliers";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PasswordReset from "./components/Auth/PasswordReset";
import ResetFromMail from "./components/Auth/ResetFromMail";
import ResetFromNumber from "./components/Auth/ResetFromNumber";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/password-reset" || location.pathname === "/reset-from-mail" || location.pathname === "/reset-from-number";

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/reset-from-mail" element={<ResetFromMail />} />
        <Route path="/reset-from-number" element={<ResetFromNumber />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
