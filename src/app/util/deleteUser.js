"use client"
export function DeleteUser(props){
    const userId =props.id;
    console.log(userId);

    const deleteuser = async () =>{
        let user =await fetch('http://localhost:3000/api/hello/'+userId,{
            method:"delete"

        })
        user = await user.json()
        if(user.success)
        alert('data Deleteed ')
    }
    return <button onClick={deleteuser}>Delete</button>
}