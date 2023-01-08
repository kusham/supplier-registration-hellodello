import { useState } from 'react';
import './App.css'
import CompanyFeatures from './components/CompanyFeatures/CompanyFeatures';
import Footer from './components/Footer/Footer';
import ImageSlideShow from './components/ImageSlideShow/ImageSlideShow';
import IntroVideo from './components/IntroVideo/IntroVideo';
import Navbar from './components/Navbar/Navbar';
import RegisterModal from './components/RegisterModal/RegisterModal';
import RegisterSection from './components/RegisterSection/RegisterSection';

function App() {
  const [openRegistration, setOpenRegistration] = useState(false)
  return (
    <div >
      <Navbar />
      <ImageSlideShow />
      <IntroVideo />
      <RegisterSection setOpenRegistration={setOpenRegistration}/>
      <RegisterModal openRegistration={openRegistration} setOpenRegistration={setOpenRegistration}/>
      <CompanyFeatures />
      <Footer />
    </div>
  );
}

export default App;
