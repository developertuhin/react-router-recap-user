import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Users = (props) => {
    const {name,email,id } = props.users
   
    
    const userStyles = {
        border:'2px solid purple',
        margin:'50px',
        padding:'20px',
        borderRadius:'20px',
        // width:'500px'
        textAlign:'center'
    }
    const buttonStyles ={
        padding:'10px 50px',
        borderRadius:'10px',
        border:'none',
        backgroundColor:'gold',
        color:'black'
    }

    const history = useHistory();

    const handleDetails = (userId) =>{
        history.push(`/user/${userId}`)
    }
    return (
        <div style={userStyles}>
            <h2>Name:{name} </h2>
            <p>Email : {email}</p>
            {/* <Link to={`/user/${id}`}><button style={buttonStyles}>Details user{id}</button></Link> */}
            <button onClick={()=> handleDetails(id)} style={buttonStyles}>Details</button>
            
        </div>
    );
};

export default Users;