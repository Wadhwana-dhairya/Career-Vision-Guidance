import React, {useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import KeyIcon from '@mui/icons-material/Key';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  const handleInput = (e) => {
     const { name, value } = e.target;
     setuser({ ...user, [name]: value });
  }
  const Change = async (e) => {
    
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    
    // const res = await axios.post("/register", {
    //     name, email, phone, work, password, cpassword
    // });
    axios.post("/register", {
           name, email, phone, work, password, cpassword
      })
    .then(response => {
      // Handle the successful response
      window.alert("registeration successfull");
      navigate("/signin")
    })
    .catch(error => {
      // Handle the error response
      // console.error(error.response.data);
      window.alert("registeration Failed,Invalis Details")
    });
    console.log("hhhhh");
    // console.log(res);
    

    // if (res.status === 422 || !res) {
    //   window.alert("registeration Failed,Invalis Details")

    // }
    // else {
    //   window.alert("registeration successfull");
    //   navigate("/signin")
    // }
   
   
  } 

  return (
    <>
      <div className="signup">
        <div className="signup_form">
          <div className="signup_content">
            <div className="p">
              <p>Sign Up</p>
            </div>
            <form method='POST' className='signup_info'>
              <div className="imformation">
                <AccountBoxIcon className="svg_icons" />
                <input type="text" placeholder='Enter Your Name' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInput} />
              </div>
              <div className="imformation">
                <EmailIcon className="svg_icons" />
                <input type="text" placeholder='Enter Your email' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInput} />
              </div>
              <div className="imformation">
                <PhoneIcon className="svg_icons" />
                <input type="number" placeholder='Enter Your phone Number' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInput} />
              </div>
              <div className="imformation">
                <AssuredWorkloadIcon className="svg_icons" />
                <input type="text" placeholder='Enter Your profession' name='work' id='work' autoComplete='off' value={user.work} onChange={handleInput} />
              </div>
              <div className="imformation">
                <KeyIcon className="svg_icons" />
                <input type="password" placeholder='Enter Your password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInput} />
              </div>
              <div className="imformation">
                <LockPersonIcon className="account" />
                <input type="password" placeholder='Confirm Your password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInput} />
              </div>
              <div className='form-group form-button'>
                <input type="submit" name="signup" id="signup" value="Register" className='form_submit' onClick={Change} />
              </div>
            </form>
          </div>
          <div className="signup_photo">
            <img src="https://st.depositphotos.com/18722762/51522/v/600/depositphotos_515228776-stock-illustration-online-registration-sign-login-account.jpg" alt="SignUp image" className='photo' />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register