import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {

    const [user,setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <div>
            {
                user.map(users => <Users users={users}></Users>)
            }
        </div>
    );
};

export default Home;