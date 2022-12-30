import './App.css'
import CompanyFeatures from './components/CompanyFeatures/CompanyFeatures';
import ImageSlideShow from './components/ImageSlideShow/ImageSlideShow';
import IntroVideo from './components/IntroVideo/IntroVideo';
import Navbar from './components/Navbar/Navbar';
import RegisterSection from './components/RegisterSection/RegisterSection';

function App() {
  return (
    <div >
      <Navbar />
      <ImageSlideShow />
      <IntroVideo />
      <RegisterSection />
      <CompanyFeatures />
    </div>
  );
}

export default App;
