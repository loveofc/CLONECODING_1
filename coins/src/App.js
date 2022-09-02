
import {useState, useEffect} from"react";
import axios from'axios';


function App() {
  const [loading, setLoading] = useState(true);
  const [weather,setWeather] = useState([]);
  const [str, setStr] = useState("");

  useEffect(()=>{
    axios.get("/api").then(response=>{
      var xmlDoc = new DOMParser().parseFromString(response.data,'text/xml');      
      let datas = xmlDoc.getElementsByTagName("data");
      console.log()
      for(let i =0; i<datas.length;i++){
        let dataChild = datas[i].childNodes
        let arr =[];
        for(let j=0; j<dataChild.length;j++){  
                  
          if(dataChild[j].nodeType!==1){
            continue;
          }else{
            if(dataChild[j].nodeName==="day"){
              arr.push(dataChild[j].childNodes[0].nodeValue)
            }else if(dataChild[j].nodeName==="wfKor") {
              arr.push(dataChild[j].childNodes[0].nodeValue) 
            }else{
              continue;
            }
        }         
      } 
      setWeather(cur=>[arr,...cur]) 
     }
     setLoading(false)

    })
    setStr((cur)=>{
      for(let i = 0; i< weather.length;i++){
        cur += "<li>날짜 : "+weather[i][0]+" 날씨 : "+weather[i][1]+"</li>"
      }
    })    
  },[])
  
  console.log(str)
  
  return (
    <div >
      <h1>The Coins!</h1>
      <h3>
        {loading? "loading..":str}
      </h3>
      
    </div>
  );
}

export default App;
