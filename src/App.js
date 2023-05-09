import './App.css';
import {RouterProvider} from 'react-router-dom';
import { routes } from './Pages/Routes/Route/Route';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
