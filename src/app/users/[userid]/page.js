async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/hello/${id}`);
    data =await data.json();
    return data.result;
}

export default async function page({params}){
    
    console.log(params);

    const user = await getUser(params.userid)
    console.log(user);
    return(
        <div>
            <h2>This User Details</h2>
            <h3>Name: {user.name}</h3>
        </div>
    )
}