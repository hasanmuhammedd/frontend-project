import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser, FaUserAltSlash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { UserAuth } from "../../Utils/UserAuth";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  const { token, setToken } = useContext(UserAuth);
  const isAdmin = localStorage.getItem("isAdmin");
  

  const handleLogout = () => {
    
    localStorage.removeItem("user_token");
    localStorage.removeItem("isAdmin");
    setToken(null);
  };

  return (
    <nav className="header"> 
      <Link className='logo' to='/Home'>LOGO</Link> 

      <nav className="navbar">
      <NavLink activeClassName="active" className="link" exact={true.toString()} to='/Home'>Home</NavLink> 
<NavLink activeClassName="active" className="link" exact={true.toString()} to='/Aboutus'>About us</NavLink> 
<NavLink activeClassName="active" className="link" exact={true.toString()} to='/Products'>Products</NavLink> 
<NavLink activeClassName="active" className="link" exact={true.toString()} to='/Contact'>Contact</NavLink>

        {isAdmin == "true" && <Link to={"/dashboard"}>dashboard</Link>}

       
        {token ? (
          <FaUserAltSlash className='logout' onClick={handleLogout} />
        ) : (
          <Link className='logout' to='/Login'><FaRegUser /></Link>
        )}
        <Link className='logout' to='/Cart'> <FaCartPlus /></Link>
        <Link className='logout' to='/Wishlist'><FaHeart /></Link>
      </nav>
    </nav>
  );
}

export default Navbar;
