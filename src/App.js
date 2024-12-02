import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import './styles/main.css'
import Footer from "./components/Footer";
import Places from "./components/Places/Places";
import Suppliers from "./components/Suppliers/Suppliers";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
