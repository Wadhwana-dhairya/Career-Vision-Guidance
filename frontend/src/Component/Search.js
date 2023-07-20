import React from "react";
import { useContext } from "react";
import { Usercontext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState, Fragment } from "react";
import cdata from "../Data/Cdata";
import Card from "./Card";
import "./card.css";
import "./clg.css";
import Cdata from "../Data/Cdata";

const Search = () => {
  const { state, dispatch } = useContext(Usercontext);
  const navigate = useNavigate();
  
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      //   navigate(`/products/${keyword}`);
    } else {
      //   navigate("/products");
    }
  };
  const callBack = () => {
    if (!state) {
      navigate("/signin");
    }
  }
  useEffect(() => {
    callBack();
  }, []);

  return (
    <>
      <div>
        <div>
          <p className="heading">Search a College Just it!!</p>
        </div>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a college ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="clg">
        <p>colleges</p>
        <hr />
      </div>
      <Card
        imgsrc={Cdata[0].imgsrc}
        title={Cdata[0].title}
        link={Cdata[0].link}
      />
      <Card
        imgsrc={Cdata[1].imgsrc}
        title={Cdata[1].title}
        link={Cdata[1].link}
      />
      <Card
        imgsrc={Cdata[2].imgsrc}
        title={Cdata[2].title}
        link={Cdata[2].link}
      />
      <Card
        imgsrc={Cdata[3].imgsrc}
        title={Cdata[3].title}
        link={Cdata[3].link}
      />
      <Card
        imgsrc={Cdata[4].imgsrc}
        title={Cdata[4].title}
        link={Cdata[4].link}
      />
      <Card
        imgsrc={Cdata[5].imgsrc}
        title={Cdata[5].title}
        link={Cdata[5].link}
      />
    </>
  );
};

export default Search;
