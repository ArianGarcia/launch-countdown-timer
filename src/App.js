import './App.css';
import Footer from './Components/Footer';
import Countdown from './Components/Countdown';

function App() {
  return (
    <div id='app'>
      <main>
        <p>WE'RE LAUNCHING SOON</p>
        <Countdown/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
