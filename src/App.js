
import './App.css';
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Intro></Intro>
     <Services></Services>
     <Experiences></Experiences>
     <Works></Works>
     <Portfolio></Portfolio>
     <Testimonial></Testimonial>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
