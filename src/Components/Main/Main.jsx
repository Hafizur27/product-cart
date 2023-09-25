import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Context from "../../provider/Context/Context";
 
const Main = () => {
  return (
    <div className="p-6">
      <Context>
        <NavBar />
        <Outlet />
      </Context>
    </div>
  );
};

export default Main;
