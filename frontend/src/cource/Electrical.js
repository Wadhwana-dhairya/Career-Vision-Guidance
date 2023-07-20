import React from 'react'
import "../Component/card.css"
import Cdata from '../Data/Cdata'; 
import Card from '../Component/Card';

const Electical = () => {
  return (
    <>
      <h1 className="head"> Electrical Engineering </h1>
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
  )
}

export default Electical