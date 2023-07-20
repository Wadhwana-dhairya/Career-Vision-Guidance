import React,{ useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../App';

const Logout = () => {
  const { state, dispatch } = useContext(Usercontext);
  const navigate = useNavigate();
  const callBack = async () => {
      try {
          await fetch("/logout", {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials: "include"
          });
         dispatch({ type: "user", payload:false})
         navigate("/")
      }
      catch (err) {
          navigate("/")
          console.log(err);
      }
  }

  useEffect(() => {
    callBack();
  }, []);
  
  return (
    <div>Logout</div>
  )
}

export default Logout