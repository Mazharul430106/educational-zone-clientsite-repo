import './App.css';
import {RouterProvider} from 'react-router-dom';
import { routes } from './Pages/Routes/Route/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
