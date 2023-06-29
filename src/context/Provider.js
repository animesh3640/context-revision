import React,{useState} from "react";
import cricketContext from "./context";
const Provider =(props)=>{

    let [cricketer,setCricketer] = useState({
        name:'Virat Kohli',
        age:34,
        highestScore:183
    });

    return(
        <cricketContext.Provider  
            value={{cricketer:cricketer,setCricketer:setCricketer}} // value = {cricketer:cricketer,setCricket:setCricket}
        >  
            {props.children}
        </cricketContext.Provider>
    )
}
export default Provider;