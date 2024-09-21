import { useEffect, useState } from "react"

export function BindingExpression(){
    const [theme,setTheme] = useState('bg-dark');

    useEffect(()=>{
        setTheme('bg-success');
    },[])
   
    return(
        <>
            <div className="container-fluid">
                <h2>Data Binding Expression</h2>
                <form action="" className={`border border-2 p-2 border-primary w-25 ${theme}`}>
                    <dl>
                        <dt>User Name</dt>
                         <dd><input type="text" name="" id="" className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}