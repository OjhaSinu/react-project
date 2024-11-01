import { useState } from "react"

export function MultiArray(){
    const [categories] =useState(["All", "Bat", "category 2"]);
    return(
        <>
            <div>Multi Array Assign</div>

            <ol>
                {categories.map(category=> <li>{category}</li>)}
            </ol>
        </>
    )
}