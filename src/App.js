import './App.css'
import AppBar from './features/landing/AppBar'
import Banner from './features/landing/Banner';
import Footer from './features/landing/Footer';
import Section1 from './features/landing/sections/Section1';
import Section2 from './features/landing/sections/Section2';
import Section3 from './features/landing/sections/Section3';
import Section4 from './features/landing/sections/Section4';
import Section51 from './features/landing/sections/Section51';
import Section6 from './features/landing/sections/Section6';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section51 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
