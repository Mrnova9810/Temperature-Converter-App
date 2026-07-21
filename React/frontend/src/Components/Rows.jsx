import P from "./P";
import TextArea from "./TextArea"

function Row(props){
    return (
        <>
         <div className="Row">
            <P tName={props.unit}></P>
            <TextArea id={props.unit}  value= {props.value}  onValueChange={props.onValueChange} clear={props.clear}></TextArea>
         </div>
        </>
    )
}

export default Row;