import { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"
import { PiCatBold } from "react-icons/pi";
import DataContext from "./Context/DataContext";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className="Header">
      <PiCatBold size={40}/><h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        :width < 992 ? <FaTabletAlt />
        : <FaLaptop /> }
        <Link to="/">Home</Link><Logout />
      </header>
  )
}

export default Header
