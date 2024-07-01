import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add_user from './feaure/Website/Pages/Add_user';
import Home from './feaure/Website/Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
        <Route
            path="/"
            element={
              <>
                < Home/>
              </>
            }
          ></Route>
           <Route
            path="/add_user"
            element={
              <>
                < Add_user/>
              </>
            }
          ></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
