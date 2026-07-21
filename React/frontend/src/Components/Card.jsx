import { useState } from "react";
import Row from "./Rows"



function Card(){
    
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit]  = useState("");
    const [kelvin, setKelvin] = useState("");

    function fahrenheitConverter(value){
        if(value.trim() === "") return
        if(isNaN(value)) return
         const f =   Number(value)
         const c =   5 *(f- 32) / 9.0
         const k = c + 273.15 
          update(c,f,k)
    }


    function calsisusConvarter(value){
          if(isNaN(value)) return
       const c = Number(value)
       const f = (c * 9 /5.0) + 32
       const k = c + 273.15
       update(c,f,k)
    }

    function kelvinConverter(value){
          if(isNaN(value)) return
        const k =   Number(value)
        const c = k - 273.15
        const f = (c * 9 /5.0) + 32
        update(c,f,k)
    }


    function update(c,f,k){
         setCelsius( (c).toFixed(0))
         setFahrenheit( (f).toFixed(2))
         setKelvin((k).toFixed(2))
    }

    function clear(){
        setCelsius("")
        setFahrenheit("")
        setKelvin("")
    }

    return (
        <>
        <div id="card">
         <h2> Temperature Converter</h2>
           <Row unit="calsius"     value= {celsius}  onValueChange={calsisusConvarter} clear={clear} >  </Row>
           <Row unit="fahrenheit"  value={fahrenheit}   onValueChange={fahrenheitConverter}> clear={clear}  </Row>
           <Row unit="kelvin"      value={kelvin}   onValueChange={kelvinConverter}> clear={clear}</Row>
           </div>
        </>
    )
}

export default Card;

