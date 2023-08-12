

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {
 
  const user = JSON.parse(localStorage.getItem("userId"));
  return (
    <>
      {user ? <Navbar /> : ""}

      <AllRoutes />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App
