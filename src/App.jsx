import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomImage from "./components/WelcomImage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CardCarousel from "./components/CardCarousel";
import Tours from "./components/Tours";
import MyCalendar from "./components/MyCalendar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/calendar"
            element={
              <>
                <Tours /> <MyCalendar />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Tours /> <Login />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />

          <Route path="/tours" element={<Tours />} />

          <Route
            path="/packages"
            element={
              <>
                <Tours />
                <ProductList />
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
