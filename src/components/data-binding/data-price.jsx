import { useEffect, useState } from "react"

export function DataPrice(){

    const[setPrice, getPrice] = useState(0);

    useEffect(()=>{
        getPrice(6000.00);
    },[])
    return(
        <div>
            <h3>Data Demo Price</h3>
            <p>Price {setPrice.toFixed(2)}</p> 
            <p>Price Another Style {setPrice.toLocaleString('en-us',{style:'currency', currency:'USD'})}</p>
        </div>
    )
}