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
  return (
    <div className="App">
      <FavouriteProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/destinations" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/sign-up" element={<ValidationPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/details/:source/:id" element={<DetailsPage/>}/>
            <Route path="/favourite" element={<FavouritePage/>}/>
          </Routes>
        </Router>
      </FavouriteProvider>
    </div>
  );
}

export default App;
