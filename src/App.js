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
import NewPassword from "./components/Auth/NewPassword";
import { useState } from "react";
import Profile from "./components/Profile/Profile";
import PlaceModal from "./components/Modals/PlaceModal";
import ReservationModal from "./components/Modals/ReservationModal";
import SuccessModal from "./components/Modals/SuccessModal";
import CancelModal from "./components/Modals/CancelModal";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationModal, setReservationModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isCancelModal, setIsCancelModal] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [selectedPlacePrice, setSelectedPlacePrice] = useState(null);

  const location = useLocation();

  const isLoginPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/password-reset" || location.pathname === "/reset-from-mail" || location.pathname === "/reset-from-number" || location.pathname === "/new-password";

  return (
    <div className="App">
      {!isLoginPage && <Header isAuth={isAuth} setIsAuth={setIsAuth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places setIsModalOpen={setIsModalOpen} setSelectedPlaceId={setSelectedPlaceId} />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/reset-from-mail" element={<ResetFromMail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
      {isModalOpen
        && <PlaceModal
          setIsModalOpen={setIsModalOpen}
          setReservationModal={setReservationModal}
          selectedPlaceId={selectedPlaceId}
          setSelectedPlacePrice={setSelectedPlacePrice}
        />}
      {reservationModal
        && <ReservationModal
          setReservationModal={setReservationModal}
          setIsSuccessModal={setIsSuccessModal}
          selectedPlacePrice={selectedPlacePrice}
        />}
      {isSuccessModal
        && <SuccessModal
          setIsSuccessModal={setIsSuccessModal}
          setIsCancelModal={setIsCancelModal} />}
      {isCancelModal && <CancelModal setIsCancelModal={setIsCancelModal} />}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
