import React from "react";
import { useContext } from "react";
import { Usercontext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

const Contact = () => {
    const { state, dispatch } = useContext(Usercontext);
    const navigate = useNavigate();
  const callBack = () => {
    if (!state) {
      navigate("/signin");
    }
  };
    useEffect(() => {
      callBack();
    }, []);
  return (
    <>
      
      <div className="contactContainer">
        <div className="div">
          <a className="mailBtn" href="mailto:jilp66082@gmail.com">
            <Button>Contact: jilp66082@gmail.com</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
