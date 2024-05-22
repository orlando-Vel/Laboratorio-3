import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomImage from "./components/WelcomImage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CardCarousel from "./components/CardCarousel";
import Tours from "./components/Tours";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/tours" element={<Tours />} />
          <Route
            path="/packages"
            element={
              <>
                <Tours />
                <CardCarousel />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Tours />
                <Gallery />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <>
                <WelcomImage />
                <CardCarousel />
                <Gallery />
                <Testimonials />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
