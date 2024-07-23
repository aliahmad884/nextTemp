"use client"
import { useEffect, useRef, useState } from "react";


export default function MongoForm() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const usernameRef = useRef(null);
    const [resdata,setResdata]=useState('')
    
    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus()
        }
    }, [])



    const handleSubmit =async (e) => {
        e.preventDefault();
        const data={
            'Username':username,
            'Password':pass
        }

        const response=await fetch('https://effective-space-rotary-phone-wr7xp45v6qjwc54wp-3000.app.github.dev/api/mongologin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        let result=await response.json()
        setResdata(result)

        setUsername('');
        setPass('')
        if (usernameRef.current) {
            usernameRef.current.focus()
        }
    }

    return (
        <>
            <div style={{ border: "2px solid", padding: "50px", minWidth: '300px' }}>
                <h2>MongoDB Atlas Server</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexFlow: "column nowrap" }}>
                    <input ref={usernameRef} onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" />
                    <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" placeholder="Password" />
                    <button id="btnSubmit" type="submit">Submit Form</button>
                </form>
                <h3>Welcome: {resdata.User}</h3>
                <h3>Atlas Server Response:<br/> {resdata.response}</h3>
            </div>
        </>
    );
}