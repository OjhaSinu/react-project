import { useEffect, useState } from "react"

export function DataBindingForm(){

    const[theme, setTheme]=useState("bg-dark")

    useEffect(()=>{
        setTheme('bg-success')
    },[])
    return(
        <div className="container-fluid">
            <h2>Data Binding Form</h2>
            <form action="" className={`border border-2 p-2 boder-primary w-25 ${theme}`}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}