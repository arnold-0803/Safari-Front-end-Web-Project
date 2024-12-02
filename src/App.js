import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ValidationPage from "./pages/ValidationPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import FavouritePage from "./pages/FavouritePage";
import FavouriteProvider from "./context/favourite-context-provider";

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <FavouriteProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home scrollToTop={scrollToTop}/>}/>
            <Route path="/about" element={<About scrollToTop={scrollToTop}/>}/>
            <Route path="/destinations" element={<Service scrollToTop={scrollToTop}/>}/>
            <Route path="/contact" element={<Contact scrollToTop={scrollToTop}/>}/>
            <Route path="/sign-up" element={<ValidationPage scrollToTop={scrollToTop}/>}/>
            <Route path="/search" element={<SearchPage scrollToTop={scrollToTop}/>}/>
            <Route path="/details/:source/:id" element={<DetailsPage scrollToTop={scrollToTop}/>}/>
            <Route path="/favourite" element={<FavouritePage scrollToTop={scrollToTop}/>}/>
          </Routes>
        </Router>
      </FavouriteProvider>
    </div>
  );
}

export default App;
