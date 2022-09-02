import { useEffect, useState } from "react";
import styles from "./Button.module.css";

function Hello(){
    useEffect(()=>{
        console.log("Created........")
        return ()=>{console.log("destroyed........")}
        
    },[])
    return(
        <h1>Hello</h1>
    )
}

function SHowHide(){
    const [showing,setShowing] =useState(false);
    const onClick =()=>setShowing(bool=>!bool)
    return (
        <div>
            {showing ? <Hello/> : null}
            <button className={styles.btn} onClick={onClick}>{ showing? "Hide":"Show"}</button>
        </div>
    )
}
export default SHowHide;