import Link from "next/link";

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
                <div>
                    {i.id}
                    <Link href={`/users/${i.id}`}>{i.name}</Link>
                </div>
            ))
        }
        </div>
    )
}