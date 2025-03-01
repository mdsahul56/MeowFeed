import { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"
import { PiCatBold } from "react-icons/pi";
import DataContext from "./Context/DataContext";

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className="Header">
      <PiCatBold size={40}/><h1>{title}</h1>
      {width < 768 ? <FaMobileAlt />
        :width < 992 ? <FaTabletAlt />
        : <FaLaptop /> }
    </header>
  )
}

export default Header
