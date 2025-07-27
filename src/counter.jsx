import { useState } from "react"

export default function Counter(){
    const [count,setCount] =useState(0)
    
    

    const handleAdd = ()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const handleRemove = ()=>{
        if(count> 0){
            const newCount=count-1;
            setCount(newCount)
        }
        else{
            alert("Minus is not show")
        }
    }
    const handleZero = ()=>{
        const newCount=0;
        setCount(newCount)
    }

    const CardStyle ={
        margin : '5px'
    }

    const Card ={
        border : '2px solid white',
        padding : '10px',
        borderRadius: '10px'
    }

    const countStyle ={
        border:'5px solid red',
        padding:'10px',
        borderRadius:'10px',
        background:'grey'
    }

    const [toggle,setToggle]=useState(false)

    const handleToggle=()=>{
         setToggle(!toggle)
    }


    return(
        <div style={Card}>
            <h3 style={countStyle}>Count: {count}</h3>
            <button style={CardStyle} onClick={handleAdd}>ADD</button>
            <button style={CardStyle} onClick={handleRemove}>REMOVE</button>
            <button style={CardStyle} onClick={handleZero}>UNDA</button>

            <div>
                <button onClick={handleToggle}>{toggle ? "Hide" : "Visible"}</button>

                {toggle && <p>HI i am Shafi</p>}
            </div>
        </div>

        
    )
}