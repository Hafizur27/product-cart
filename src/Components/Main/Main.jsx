import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Context from "../../provider/Context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
const Main = () => {
  return (
    <div className="p-6 bg-gray-100">
      <Context>
      <ToastContainer />
        <NavBar />
        <Outlet />
      </Context>
    </div>
  );
};

export default Main;
