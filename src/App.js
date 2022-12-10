import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


function App() {
  const [isLoaded,setIsLoaded] = useState(false);
  const [item,setItem] = useState([]);
  const [error,setError] = useState(new Error());
  const [counter,setCounter] = useState(1);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${counter}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItem(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error);
          }
        )
    },[counter])
  


  return (
    <div className="App">
        <div>
          <div>
            <button onClick={()=>setCounter(counter+1)}>Proximo</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter-1)}>Anterior</button>
          </div>
              {
                item && 
                
                <div>
                  <h1>{item.name}</h1>
                  <h1>{item.gender}</h1>
                  <img src={item.image}/>
                </div>
                  
              }  
        </div>
    </div>
  );
}

export default App;
