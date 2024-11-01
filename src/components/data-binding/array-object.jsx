import { useState } from "react"

export function ArrayObject(){
    const [products]=useState([{Name:"samsung",Price:50000},{Name:"Vivo",Price:20000}])
    return(
        <>
            <table className="table table-hover mt-3 caption-top">
                <caption>Product Table Format</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item=> <tr key={item}><td>{item.Name}</td><td>{item.Price}</td></tr>)
                    }
                </tbody>
            </table>
        </>
    )
}