import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ValidationPage from "./pages/ValidationPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home scrollToTop={scrollToTop}/>}/>
          <Route path="/about" element={<About scrollToTop={scrollToTop}/>}/>
          <Route path="/service" element={<Service scrollToTop={scrollToTop}/>}/>
          <Route path="/contact" element={<Contact scrollToTop={scrollToTop}/>}/>
          <Route path="/sign-up" element={<ValidationPage scrollToTop={scrollToTop}/>}/>
          <Route path="/search" element={<SearchPage scrollToTop={scrollToTop}/>}/>
          <Route path="/details/:source/:id" element={<DetailsPage scrollToTop={scrollToTop}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
