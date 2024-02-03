import './App.css';
import Addtask from './components/Addtask';
import Nav from './components/Nav';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Addtask />
        <Tasklist />
      </header>
    </div>
  );
}

export default App;
