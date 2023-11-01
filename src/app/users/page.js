import Link from "next/link";
import './../style.css';
import { DeleteUser } from "../util/deleteUser";

async function getUsers(){
    let data = await fetch('http://localhost:3000/api/hello');
    data =await data.json();
    return data;
}


export default async function page(){
    const user = await getUsers();
    console.log(user);
    return (
        <div>
        <h1>This is users page</h1>
        {
            user.map((i)=>(
                <div className="user-item">
                    {i.id}
                    <span><Link href={`/users/${i.id}`}>{i.name}</Link></span>
                    <span><Link href={`/users/${i.id}/update`}>Edit</Link></span>
                    <DeleteUser id={i.id}/>
                </div>
            ))
        }
        </div>
    )
}