import React,{ useContext } from "react";
import cricketContext from "../context/context";

const NewCompo = () => {
    let {cricketer,setCricketer} = useContext(cricketContext);
    return(
        <div>
            <h2>Name = {cricketer.name}</h2>
            <h2>Age = {cricketer.age}</h2>
            <h2>Highest Score : {cricketer.highestScore}</h2>
            <button
                onClick={()=>{setCricketer({...cricketer,highestScore:254})}}
            >
                Update Value
            </button>

        </div>
    )
}

export default NewCompo;