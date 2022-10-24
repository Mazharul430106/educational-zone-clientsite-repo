import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Hader from './Pages/Shared/Hader/Hader';

function App() {
  return (
    <div>
        <Hader></Hader>
        <Login></Login>
        <Register></Register>
    </div>
  );
}

export default App;
