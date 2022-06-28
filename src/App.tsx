import './assets/styles/App.scss';
import Footer from './components/Footer';
import Countdown from './components/Countdown';

function App() {
  const dueDate = new Date(2021, 5, 28).getTime();

  return (
    <div id='app'>
      <main>
        <p id='mainText'>WE'RE LAUNCHING SOON</p>
        <Countdown dueDate={dueDate}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
