import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Online Shop</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
            <Link to ='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
