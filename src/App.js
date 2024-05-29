import Navbar from './Navbar';
import Home from './Home';
//jsx template + function needs to begin with capital letter

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; //always export to be used in other files
