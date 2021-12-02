import './assets/styles/App.scss';
import Footer from './components/Footer';
import Countdown from './components/Countdown';

function App() {
  return (
    <div id='app'>
      <main>
        <p id='mainText'>WE'RE LAUNCHING SOON</p>
        <Countdown/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
