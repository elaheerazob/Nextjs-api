"use client"
import './../../../style.css'

import { useEffect, useState } from "react";

export default function page({params}){
    let id =(params.userid);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    useEffect (()=>{
        getUserDetails()
    },[])

    const getUserDetails= async()=>{
        let data= await fetch('http://localhost:3000/api/hello/'+id);
        data =await data.json()
        setName(data.result.name)
        setAge(data.result.age)
        setEmail(data.result.email)
    }

    const updateData =()=>{
        console.log(name,age,email);
    }


    console.log(id);
    return (
        <div>
            <h1>Update Details</h1>

            <input className="input-filed" type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input className="input-filed" type="text" value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)} />
            <input className="input-filed" type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

            <button onClick={updateData} className='btn'>Update Data</button>
        </div>
    )
}