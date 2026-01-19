import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './data/Projects';
import ProjectDetails from './ProjectDetails';
import Contact from "./Contact";
import Footer from "./Footer";

function App(){
  return(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;