import Button from './Button';
import styles from "./App.module.css";
import { useEffect, useState} from 'react';
import ShowHide from './ShowHide';
function App() {
  let [counter, setCounter] = useState(0);
  const onClick =()=> setCounter((prev)=>prev+1);
  const [keyword, setKeyword] =useState("");
  const onChange = (e)=>{
    setKeyword(e.target.value);
  }
  const iRunOnlyOnce =()=>{
    console.log("I run only once.")
  } 
  useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
    if(keyword !=="" && keyword.length >5){
      console.log("keyword")
    }    
  },[keyword])
  useEffect(()=>{
    console.log("counter")
  },[counter])
  useEffect(()=>{
    console.log("Search for counter and keyword")
  },[counter,keyword])
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"}/><br/><br/><br/>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here....."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <ShowHide/>
    </div>
  );
}

export default App;
