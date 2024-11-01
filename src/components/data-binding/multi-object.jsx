import { useState } from "react"

export function MultiObject(){
    const [product] = useState({Name:"Samsung",Price : 15000,Rating:4.2})
    return(
        <>
            <div>Multiple Object Product Details</div>
            <p>{("Rating" in product)?product.Rating:"Rating Not Found"}</p>
            <h3>Product name</h3>
            <p>{product.Name}</p>
            <h3>Product Price</h3>
            <p>{product.Price}</p>

            <h2>Keys</h2>
            {   
                Object.keys(product).map(item=> <div key={item}>{item} : {product[item]}</div>)
            }
        </>
    )
}