import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/headers";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore"
import Details from "./pages/detailsPage/details"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Explore tittle={"movie"}/>} />
        <Route path="/tvshow" element={<Explore tittle={"tv"}/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
