import { useEffect, useState } from "react";


function TextArea(props){
    const [textValue, settextValue] = useState(props.value);

    useEffect(() =>{
        settextValue(props.value);
    }, [props.value])  
  
    return (
        <>
     
        <textarea id ={props.id}
         inputMode="numeric"  
         placeholder="Enter temprature"
         value={textValue}
         onChange={ (e)=>{
            settextValue(e.target.value)
        }
        }
        onKeyDown={(e)=>{
                if(e.key ==="Enter"){
                      e.preventDefault();
                    if(textValue =="") props.clear();  
                    else  props.onValueChange(textValue)
                    
                }
            }}
            
         ></textarea>
        </>
    )
}


export default TextArea;