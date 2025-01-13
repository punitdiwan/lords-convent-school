
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import NextNavbar from './Components/NextNavbar';
import "./App.css"
import { ToastProvider } from "react-toast-notifications";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery';
import Facilities from './Components/Facilities';
import ContactUs from './Components/ContactUs';
import AcademicPRocedure from './Components/AcademicPRocedure';
import OurSchool from './Components/OurSchool';
import Updates from './Components/Updates';
import BoardD from './Components/BoardD';
import Principal from './Components/Principal';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ToastProvider
        placement="top-center" // Optional, customize where toasts appear
        autoDismiss
        autoDismissTimeout={6000} // Optional, how long toast stays
      >
        <div className='container-fluid mainbgcch p-0'>
          <BrowserRouter>
            <ScrollToTop />
            <Updates />
            <Navbar />
            <NextNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/academicprocedure" element={<AcademicPRocedure />} />
              <Route path="/ourschool" element={<OurSchool />} />
              <Route path="/boarddirector" element={<BoardD />} />
              <Route path="/principal" element={<Principal />} />


            </Routes>
            <Footer />
          </BrowserRouter>


        </div>


      </ToastProvider>

    </>
  );
}

export default App;
