import { useEffect, useState } from "react"

export function DataMount(){
    const [stock, setStock] = useState(false);

    useEffect(()=>{
        setStock(true);
    },[])
    return(
        <div className="container-fluid">
            <h3>Data Binding Mount</h3>
            <p>Stock : {(stock===true)?"Available":"Out of Stock"}</p>
        </div>
    )
}