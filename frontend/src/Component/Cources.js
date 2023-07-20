import React from "react";
import Card from "./Card";
import Card_data from "./Card_data";
import { useContext } from "react";
import { Usercontext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function course() {
  // const { state, dispatch } = useContext(Usercontext);
  // const navigate = useNavigate();
  // const callBack = () => {
  //   if (!state) {
  //     navigate("/signin");
  //   }
  // };
  //   useEffect(() => {
  //     callBack();
  //   }, []);
  return (
    <>
      <h1 className="head"> Courses </h1>
      <Card
        imgsrc={Card_data[0].imgsrc}
        title={Card_data[0].title}  
        link={Card_data[0].link}
      />
      <Card
        imgsrc={Card_data[1].imgsrc}
        title={Card_data[1].title}
        link={Card_data[1].link}
      />
      <Card
        imgsrc={Card_data[2].imgsrc}
        title={Card_data[2].title}
        link={Card_data[2].link}
      />
      <Card
        imgsrc={Card_data[3].imgsrc}
        title={Card_data[3].title}
        link={Card_data[3].link}
      />
      <Card
        imgsrc={Card_data[4].imgsrc}
        title={Card_data[4].title}
        link={Card_data[4].link}
      />
      <Card
        imgsrc={Card_data[5].imgsrc}
        title={Card_data[5].title}
        link={Card_data[5].link}
      />
    </>
  );
}

export default course;
