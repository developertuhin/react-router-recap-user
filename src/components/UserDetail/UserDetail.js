import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UserDetail = () => {
    let {UserId} = useParams()

    const [user,setUser]= useState({})
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users/${UserId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    const {name,email,phone,website} = user;

    const useDetailStyle = {
        border:'2px solid purple',
        margin:'100px',
        padding:'20px',
        borderRadius:'20px',
        // width:'500px',
        textAlign:'center',
        
    }
    const history = useHistory();
    const handleBack = ()=>{
        history.push(`/home`)
    }
    const backButton ={padding:'10px 30px', backgroundColor:'tomato', border:'none',borderRadius:'10px',color:'white'}
    return (
        <div style={useDetailStyle}>
            {/* <h2>User Detail Component {UserId}</h2> */}
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><small>Website: {website}</small></p> 
            <button onClick={handleBack} style={backButton}>Back</button>

        </div>
    );
};

export default UserDetail;