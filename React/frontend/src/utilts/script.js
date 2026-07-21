let c = 0;  // calsisus
let f =0;  // fahrenheit
let k  = 0; // kelvin


const celsisusEl = document.getElementById("celsius") 
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")


// F = ( `C * 9 /5 ) + 32
// K = c + 273.15

celsisusEl.addEventListener("keydown", (e) =>{

    if(e.key ==="Enter"){
        e.preventDefault()
        if(celsisusEl.value == ""){
          clear()
            return
        }
        c = Number(celsisusEl.value);
        calsisusConvarter()
    }
})

fahrenheitEl.addEventListener("keydown",()=> {
    if(e.key ==="Enter"){
            e.preventDefault()
         if(fahrenheitEl.value == ""){
            clear()
            return
        }
        f = Number(fahrenheitEl.value)
        fahrenheitConverter()
    }
})


kelvinEl.addEventListener("keydown", ()=>{

    if(e.key ==="Enter"){
            e.preventDefault()
    if(kelvinEl.value == ""){
        clear()
        return
    }
    k = Number(kelvinEl.value)
    kelvinConverter()
    }
})

 function fahrenheitConverter(){
          c =   5 *(f- 32) / 9.0
          k = c + 273.15 
          update()
 }


 function calsisusConvarter(){
       f = (c * 9 /5.0) + 32
       k = c + 273.15
       update()
 }

 function kelvinConverter(){
    c = k - 273.15
    f = (c * 9 /5.0) + 32
    update()
 }


 function update(){
     celsisusEl.value = (c).toFixed(0)
     fahrenheitEl.value = (f).toFixed(2)
     kelvinEl.value = (k).toFixed(2)
 }

function clear(){
    celsisusEl.value = ""
    fahrenheitEl.value = ""
    kelvinEl.value = ""
}

//  calsisusConvarter();



