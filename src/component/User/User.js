import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    const [User, setUser] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json =>setUser(json))
    },[])
    return (
        <div>
            <h1>Total User : {User.length}</h1>
            {
                User.map(users => <UserInfo user={users} key={users.id}></UserInfo>)
            }
        </div>
    );
};

export default User;