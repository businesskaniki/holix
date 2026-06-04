import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SocialIcons from "./components/SocialIcons";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Kenyanservices from "./pages/Kenyanservices";
import ForeignServices from "./pages/ForeignServices";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SocialIcons />

      <main>
        <article>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/kenyan-services" Component={Kenyanservices} />
            <Route path="/international-services" Component={ForeignServices} />
          </Routes>
        </article>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;