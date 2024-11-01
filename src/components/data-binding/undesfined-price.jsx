import { useEffect, useState } from "react"

export function UndefinedPrice(){
    const [price, setPrice] = useState();

    useEffect(()=>{
        setPrice(4000);
    },[])
    return(
        <>

            <div>
                <h2>Enter Your Price {(price)?price:"please enter price"}</h2>
            </div>
        </>
    )
}