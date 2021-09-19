import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MeetOurTeam from './components/MeetOurTeam';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MeetOurTeam />
      <News />
      <Footer />
    </div>
  );
}

export default App;
