
import '../App.css';
import NavBar from "../Components/NavBar";
import Public from '../Routes/Public';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div >
      <header className="App-header">
      <Router>
        <NavBar/>
        <Public/>
      </Router>
      
      </header>
    </div>
  );
}

export default App;
