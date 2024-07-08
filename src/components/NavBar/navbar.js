import React, {useState} from 'react';
import './navbar.css';
import Nguyen from '../../assets/Nguyen.png';
import {Link} from 'react-scroll';
import { faMessage, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar =()=> {
    const [showMenu, setShowMenu]= useState(false);
    return(
        <nav className='navbar'>
            <img src={Nguyen} alt="logo" className='logo'/>

            <div className='menu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className="itemList">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className="itemList">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="itemList">Portfolio</Link>
            </div>

            <button className="button" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                Contact ME
                <FontAwesomeIcon icon={faMessage} className='iconImage' />
            </button>

      
            <FontAwesomeIcon icon={faBars} className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

            <div className='navMenu' style={{display: showMenu? 'flex':'none'}} >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className="NewitemList" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className="NewitemList" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="NewitemList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="NewitemList" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
};

export default Navbar;