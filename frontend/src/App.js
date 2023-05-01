import logo from './logo.svg';
import './App.css';
import School from './components/School'
import College from './components/College'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <School></School>
       {/* <College></College> */}
      </header>
    </div>
  );
}

export default App;
