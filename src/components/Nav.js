import React from 'react';
import Logo from '../images/logo.png';

const Nav = () => {
   return (
      <React.Fragment>
         <div className="nav-div">
            <img src={Logo} alt='Logo' className="Logo" />

            <div className="right-nav">
               <div className="oval">S</div>
               <p className="Organisation-Name">Organisation Name</p>
               <i className="fas fa-angle-down"></i>
               {/* <i className="fab fa-twitter"></i> */}
            </div>
         </div>
      </React.Fragment>
   );
}

export default Nav;
