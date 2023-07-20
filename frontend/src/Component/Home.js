import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <>
       <div class="container1">
         <div class="container2">
            <div id="para1">
                Discover Yourself and Your Ideal Career
            </div>
            <div id="para2">
                Get Expert career Guidance counselling and mentorship or get all information of colleges to find out
                which future path you will enjoy.
            </div>
            <div id="para3" >
                <NavLink className="btn btn-danger" to="/college">Visit now</NavLink>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home