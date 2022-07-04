import './App.css';
import Login from './Components/Login';
import Singup from './Components/Signup'

function App() {
  return (
    <div className="App">
      <Login isVisible={false} /> 
      <Singup isVisible={true} />
    </div>
  );
}

export default App;
