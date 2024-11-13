import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
