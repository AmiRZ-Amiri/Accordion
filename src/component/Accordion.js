import React, { useState } from "react";
import { CaretCircleDown } from "phosphor-react";
import {CaretCircleUp} from "phosphor-react";

import './Accordion.css'

function Accordion({data}) {
 
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); 
  };
 


  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>{data.titel}</div>
          <div className="sign">{show ? <CaretCircleUp size={32} /> : <CaretCircleDown size={32} />}</div>
        </div>
        {show && (
          <div className="accordian-body">{data.main}</div>
        )}
      </div>
    </div>
  );
}

export default Accordion