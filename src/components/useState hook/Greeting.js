import React, { useState } from 'react';


function Greeting() {
 const [message, setMessage] = useState("Hello");
 return (
 <div>
    <p>{message}, React!</p>
    <button onClick={() => setMessage("Hola")}>Change Greeting</button>
 </div>
 );
}
export default Greeting;
