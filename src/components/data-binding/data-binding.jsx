import { useEffect, useState } from "react"

export function DatBinding(){
    const [price, setPrice] = useState(0);

    useEffect(()=>{
        setPrice(1200);
    },[]);
    return(
        <div className="container-fluid">
           <h2>User Login</h2>
           <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Password</dt>
            <dd><input type="text" /></dd>
            <dt>Verify Code</dt>
            <dd>{Math.round(Math.random()*10)}{Math.round(Math.random()*10)}{Math.round(Math.random()*10)}{Math.round(Math.random()*10)}{Math.round(Math.random()*10)}{Math.round(Math.random()*10)}</dd>
           </dl>
           <button>Login</button>
        </div>
    )
}