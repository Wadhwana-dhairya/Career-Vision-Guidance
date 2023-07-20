import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
      <>
       <div class="footer">
         <div class="info_f">
            <small><NavLink to="/about"  className="a_c">About us</NavLink> | <NavLink to="/contact" className="a_c"
                    >Contact us</NavLink></small>
         </div>
         <div class="info_c">
             <small>Copyright &copy; DE Team</small>
         </div>
      </div>
      </>
  )
}

export default Footer