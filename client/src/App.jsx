import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/headers";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/movie" element={<Home/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
