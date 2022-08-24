import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Profil from "./pages/Profil/Profil";
import Gallery from "./pages/Gallery/Gallery";
import MusicFav from "./pages/MusicFav/MusicFav";
import FilmFav from "./pages/FilmFav/FilmFav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/MusicFav" element={<MusicFav />} />
        <Route path="/FilmFav" element={<FilmFav />} />
      </Routes>
    </>
  );
}

export default App;
