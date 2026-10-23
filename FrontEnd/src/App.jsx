import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer/Footer'
import HomePage from './components/Pages/HomePage/HomePage'
import Header from "./components/Home/Header/Header";
import SatellitesAllImages from "./components/Pages/SatellitesAllImages/SatellitesAllImages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import PasadasPage from "./components/Pages/PasadasPage/PasadasPage"
import { PasadasProvider } from "./components/Context/PasadasContext";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <PasadasProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/> // Página principal
          <Route path="/sat/:satellitename" element={<SatellitesAllImages/>}/> // Informacion Satelite
          <Route path="/pasadas" element={<PasadasPage/>}/>
        </Routes>
      </PasadasProvider>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
