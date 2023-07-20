import React from 'react'
import "../Component/card.css"
import Cdata from '../Data/Cdata'; 
import Card from '../Component/Card';

const it = () => {
  return (
    <>
      <h1 className="head"> Information & Technology </h1>
      <Card
        imgsrc={Cdata[0].imgsrc}
        title={Cdata[0].title}
        link={Cdata[0].link}
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
     
   </>
  )
}

export default it