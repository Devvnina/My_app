
import './App.css';
import Navbar from './Components/Navbar';
import Public from './Routes/Public';
import Footers from './Commons/Footers';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Public />
    </Router>  
    <Footers/> 
  </div>
  );
}

export default App;