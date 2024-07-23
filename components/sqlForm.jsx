"use client"
import { useEffect, useRef, useState } from "react";


export default function SQLForm() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const usernameRef = useRef(null);
    // const handleSubmit=()=>{

    // }
    useEffect(() => {
        const sqlForm = document.getElementById('SQLForm');
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("SQL Form data:");
            console.log("Username:"+username);
            console.log("Password:"+pass)
            setUsername('');
            setPass('')
            if (usernameRef.current) {
                usernameRef.current.focus()
            }
        }
        sqlForm.addEventListener('submit', handleSubmit)

        return () => {
            sqlForm.removeEventListener('submit', handleSubmit)
        }
    }, [username, pass])
    return (
        <>
         <div style={{ border: "2px solid", padding: "50px",minWidth:'300px '}}>
          <h2>MySQL Server</h2>
          <form id="SQLForm" style={{ display: "flex", flexFlow: "column nowrap" }}>
            <input ref={usernameRef} onChange={(e) => setUsername(e.target.value)} value={username} type="text"  placeholder="Username" />
            <input onChange={(e) => setPass(e.target.value)} value={pass} type="password"  placeholder="Password" />
            <button type="submit">Submit Form</button>
          </form>
          <h3>SQL Server Response:</h3>
        </div>
        </>
    );
}