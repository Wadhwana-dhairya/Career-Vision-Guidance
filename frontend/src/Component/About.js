import React from "react";
import JIL from "../images/JIL.jpg"
import yash from "../images/yash.jpg"
import dhairya from "../images/dhairya.jpg"
import ishika from "../images/ishika.jpg"


const About = () => {
  return (
    <>
      <div className="about">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <div className="ab_id">
                <h2 class="name">Name : Jil Patel</h2>
                <p class="info_m">Enrollment : 200280107069</p>
                <p class="info_m">Email : jilpatel66082@gmail.com</p>
              </div>
            </div>
            <div class="flip-box-back">
             <img src={JIL} alt="No photo" className="photo" />
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <div className="ab_id">
                <h2 class="name">Name : Yash Parmar</h2>
                <p class="info_m">Enrollment : 200280107068</p>
                <p class="info_m">Email : yashparmar1073@gmail.com</p>
              </div>
            </div>
            <div class="flip-box-back">
               <img src={yash} alt="No photo" className="photo" /> 
            </div>
          </div>
        </div>

        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <div className="ab_id">
                <h2 class="name">Name : Ishika Patel</h2>
                <p class="info_m">Enrollment : 200280107038</p>
                <p class="info_m">Email : ishikapatel2409@gmail.com</p>
              </div>
            </div>
            <div class="flip-box-back">
               <img src={ishika} alt="No photo" className="photo" />
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <div className="ab_id">
                <h2 class="name">Name : Dhairya Wadhawana</h2>
                <p class="info_m">Enrollment : 200280107102</p>
                <p class="info_m">Email : dhairyawadhwana02@gmail.com</p>
              </div>
            </div>
            <div class="flip-box-back">
              <img src={dhairya} alt="No photo" className="photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
