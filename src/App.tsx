import { Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Faq from "./routes/Faq";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Privacy from "./routes/Privacy";
import Process from "./routes/Process";
import Products from "./routes/Products";
import Services from "./routes/Services";
import Terms from "./routes/Terms";
import WhoWeAre from "./routes/WhoWeAre";

const App = () => {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
};

export default App;
