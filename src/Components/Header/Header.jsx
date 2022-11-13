import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
 
const Header = () => {

    let navigate = useNavigate();
    
     return (
         <div className='headerDesign'>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},750)}>Home</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/popular")},750)}>Popular</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/search")},750)}>Search</div>
         </div>
     )
}
export default Header;
