import { useEffect, useState } from "react"

export function DataStock(){
    const [stock, getStock] = useState(true);

    useEffect(()=>{
        getStock(true);
    },[])
    return(
        <>
            <div>
                <h3>Data Stock Value</h3>
                <p>Stock :{(stock==true)?"Out of Stock": "Available"} </p>
            </div>
        </>
    )
}