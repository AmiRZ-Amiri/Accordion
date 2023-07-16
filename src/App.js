import React from "react"
import Accordion from "./component/Accordion"
import text from "./Text-list"
import { Question } from "phosphor-react";
import './App.css'

function App (){
    return(
    <div className="App">
        <div className="Titel-App">
            <div className="icon"><Question size={32} /></div>
            <h2 className="titel">پرسش‌های متداول</h2>

        </div>

        <div className="common qu">
    ‍        {text.map((product) => (
                <Accordion data={product}/>
            ))}
        </div>
    </div>
    )
}

export default App

