import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-around md:justify-between items-center h-20 pr-1 md:pr-7 pl-1 md:pl-7 border-b-2 border-zinc-800 bg-customOrange">

        <li className="list-none">
          <Link to="/"><img src={logo} alt="logo" className="w-30 h-6" /></Link>
        </li>
      

      <div className="flex justify-between items-center text-sm font-medium" >
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      <button className="p-2 ml-3 md:ml-10 pl-5 pr-5 rounded-full
        bg-black text-white" >Start writing</button>
      </div> 
    </div>
  );
};

export default Navbar;
