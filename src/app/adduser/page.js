"use client"
import { useState } from 'react'
import './../style.css'
export default function page (){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    const addUser= async ()=>{
        console.log(name,age,email);
        let respone =await fetch("http://localhost:3000/api/hello",{
            method:"post",
            body:JSON.stringify({name,age,email})
        });
        respone = await respone.json();
        if(respone.success){
            alert('New User Created ')
        }else{
            alert('Something is worng')
        }
        console.log(respone);
    }
    return (
        <div className="add-user">
            <h1>Add Now User</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"  className="input-filed"/>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter Age" className="input-filed"/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" className="input-filed"/>
            <button onClick={addUser} className="btn" >Add User</button>
        </div>
    )
}