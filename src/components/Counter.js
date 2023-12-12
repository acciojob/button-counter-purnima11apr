import React , {useState} from "react";
 

const Counter = () => {
     let [count , setCount] = useState(0);

    <div>
     <p>Button clicked {count} times</p> 

     <button onClick={() => setCount(count+1)}>Click me</button>  
    </div>
}




export default Counter;