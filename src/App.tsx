import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navigation/>
     <About/>
     <Skills/>
     <Experience/>
     <Portfolio/>
     <Contacts/>
     <Footer/>

    </div>
  );
}

export default App;
