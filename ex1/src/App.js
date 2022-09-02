import {useState} from 'react';

function App() {
  const [todo,setTodo] = useState("");
  const [todoArray, setTodoArray] =useState([]);
  const onChange=(e)=>{      
      setTodo(e.target.value)
  } 
  const onSubmit=(e)=>{
      e.preventDefault();
      if(todo===""){
        return;
      }
      setTodoArray((currentArray)=>[todo,...currentArray])
      setTodo("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write here...."></input>
        <button >Add</button>
      </form>
      <hr/>
      <ul>
        {todoArray.map((item,key)=><li key={key}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
