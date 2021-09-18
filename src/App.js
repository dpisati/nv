import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MeetOurTeam from './components/MeetOurTeam';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MeetOurTeam />
      <News />
    </div>
  );
}

export default App;
