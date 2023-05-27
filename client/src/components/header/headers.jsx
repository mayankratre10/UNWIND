import React, { useState } from "react";
import "./styles.scss";
import {useNavigate,useLocation} from 'react-router-dom';

import { MdOutlineManageSearch } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { IoTvSharp } from "react-icons/io5";
import logo from '../../assets/images/logo2.png'
const headers = () => {
  const navigate=useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const showMobileMenu = () => {
    setMobileMenu(true);
  };
  const closMobileMenu = () => {
    setMobileMenu(false);
  };
  const redirector= (destination)=>{
    navigate('/UNWIND/'+destination);
  }

  return (
    <div className="header">
      <img className="logo" src={logo} onClick={()=>navigate('/UNWIND/')}/>
      <ul className="menu">
        <RiMovie2Fill className="icons"/><li className="menuItems" onClick={()=>redirector("movie")}>Movies</li>

        <IoTvSharp className="icons"/><li className="menuItems" onClick={()=>redirector("tvshow")}>TVshows</li>

        {!mobileMenu && <MdOutlineManageSearch className="searchIcon" size={30}
          onClick={showMobileMenu}
        />}
      </ul>
      {mobileMenu && (
        <div className="mobileMenu">
          <div className="closeIcon">
            <AiFillCloseCircle size={25} onClick={closMobileMenu} />
          </div>

          <div className="mobileMenuItems" onClick={()=>redirector("movie")}><RiMovie2Fill size={20}/>Movies</div>

          <div className="mobileMenuItems" onClick={()=>redirector("tvshow")}><IoTvSharp size={20}/>TVShows</div>
        </div>
      )}
    </div>
  );
};

export default headers;
