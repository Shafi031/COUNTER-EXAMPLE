import { use } from "react"
import User from "./User"


export default function LoadData({fetchUsers}){

    const Users = use(fetchUsers)
    console.log(Users)

    return(
        <div>
            
            <h3>Users : {Users.length}</h3>
            {
                Users.map(user =><User user={user}></User>)
            }
        </div>
    )

}