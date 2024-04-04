import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between px-10 py-10 bg-white text-black">
       <img src={logo} alt="logo" className="w-30 h-6 mb-5" />
       <p className="pb-5" >Every idea needs a Medium</p>     
       <ul className="flex items-center flex-col md:flex-row underline " >
             <li className="px-2"  >
             <Link to="/about">About</Link>
             </li>
             <li className="px-2"  >
             <Link to="/terms">Terms</Link>
             </li>
             <li className="px-2"  >
             <Link to="/privacy">Privacy</Link>
             </li>
             <li className="px-2"  >
             <Link to="/help">Help</Link>
             </li>
       </ul>
    </div>
  )
}

export default Footer
