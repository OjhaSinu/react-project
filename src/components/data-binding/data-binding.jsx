import { useEffect, useState } from "react"

export function DataBinding(){
    const [userName, setUserName] = useState("Jhon")
    useEffect(()=>{
setUserName('David')
    },[])
    return(
        <div>
            <h2>Data Binding</h2>
            <p>Data ! {userName}</p>
            <input type="text" name="" id="" value={userName} />
        </div>
    )
}