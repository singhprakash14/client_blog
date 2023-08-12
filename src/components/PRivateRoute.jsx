
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";



const PrivateRoute = ({ children }) => {

  const user =JSON.parse(localStorage.getItem('userId'))

 

  if (!user) {
     toast.error("Please login first")
    console.log("auth please");
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }

  return children;
};

export default PrivateRoute;
