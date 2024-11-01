import { useEffect, useState } from "react"

export function MsgMatchExpression(){
    const [msg, setMsg] = useState(`Welcome To Expression`);
    const [password, setPassword] = useState('');

    useEffect(()=>{
        setPassword('Admin@123')
    },[])


    return(
        <>
            <div>
                <h1>{msg.toUpperCase().slice(0,8)}</h1>
                <p>{(password.match(/(?=.*[A-Z])\w{4,15}/))?"Strong Password":"Weak password"}</p>
            </div>
        </>
    )
}