import { useState } from "react"

export function ArrayObjectArray(){
    const [data]=useState([{Category:"Electronics",Products:["TV","Phone"]},{Category:"T-shirts",Products:["Full T-shirts","Half T-shirt", 255]}])
    return(
        <>
            <div>data array obj ar</div>
            <ol>
                {
                    data.map(item=><li key={item}>{item.Category}
                        <ul>
                            {
                                item.Products.map(product=><li>{product}</li>)
                            }
                        </ul>
                    </li>)
                }
            </ol>
        </>
    )
}