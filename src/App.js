import './App.css';
// import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Front from './Components/Front';
import Offers from './Components/Offers';
import Plan from './Components/Plan';
import Room from './Components/Room';
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';
function App() {

  return (
    <>
    <Navbar />
    <Front />
    <Offers />
    <Plan />
    <Room />
    <ImageSlider />
    <Footer />
    </>
  );
}

export default App;
