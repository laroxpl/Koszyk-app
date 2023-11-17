import React, { useState } from "react";

function UserList(){
    const [user, selectUser] = useState();
    const [listUser, selectListUser]= useState([]);

    const handleChange = (e)=>{
    }

    const handleSubmit = (e)=>{
        if (!this.validate()){
            e.preventDefault();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>User's List</h1><br></br>
            <input type="text" value={user}></input>
            <button type="submit">add User</button><br></br>
            <div>
                <h3 value={selectListUser}></h3>
            </div>
        </form>
    )
}

export default UserList;