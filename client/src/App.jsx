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
        <Route path="/UNWIND" element={<Home />} />
        <Route path="/UNWIND/movie" element={<Explore tittle={"movie"}/>} />
        <Route path="/UNWIND/tvshow" element={<Explore tittle={"tv"}/>} />
        <Route path="/UNWIND/details/:id" element={<Details/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
