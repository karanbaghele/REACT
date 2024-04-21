import logo from './logo.svg';
import './App.css';
import {useState, useSyncExternalStore} from "react"

function App() {

  //const items = ["Item1", "Item2","Item3", "Item4", "Item5", "Item6"]
   const[items, setItems ]= useState([
    "Item1", 
    "Item2",
    "Item3", 
    "Item4",
    "Item5",
    "Item6"
   ])

  const [value, setValue]=useState("") 
  

  function onValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value)
  }
  function onAdd (){
    console.log(value);
    const newItems =[...items, value];
    setItems(newItems)
    setValue("")

  }




  return (
    <div className="App">
      <header className = "app-header">
        <h1>TO DO APP</h1>

        <input type= "text" placeholder="Enter the Items"
          value={value}
          onChange={onValueChange}
        />
        <button onClick= {onAdd}>ADD</button>
        <ol>
          {items.map((item, i)=>(
            <li
            key={i}
            style={{
              color:"blue"
            }}
            >{item}</li>

          ))
          }
        </ol>
      </header>

   
        
    </div>
  );
}

export default App;
