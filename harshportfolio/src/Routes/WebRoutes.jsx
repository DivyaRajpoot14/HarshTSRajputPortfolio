import {
  BrowserRouter as BrowerserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Resume from "../Components/Resume/Resume";
import Contact from "../Components/Contact/Contact";
import Layout from "../Layout/Layout";

const WebRoutes = () => {
  return (
    <BrowerserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowerserRouter>
  );
};

export default WebRoutes;
