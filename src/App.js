import './assets/styles/main.scss';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Layout from './Components/Layout/Layout';
import ScrollToTop from './Components/ScrollToTop';
import About from './Pages/About';

function App() {
  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<Contact />} path='/contact-us' />
        <Route element={<About />} path='/about-us' />
        <Route element={<Services />} path='/services/:serviceName' />
      </Routes>
    </Layout>
  );
}

export default App;
