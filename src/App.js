import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import './styles/main.css'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
