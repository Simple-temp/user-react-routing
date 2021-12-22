import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetDetails = () => {

    const {id} = useParams();

    const [Getdata, setGetdata] = useState([])
    useEffect(()=>
    {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json =>setGetdata(json))
    },[])
    // console.log(Getdata);
    const {name , username , website , phone , email , company , address} = Getdata;
    return (
        <div>
            <h1>Get Details</h1>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>Username : {username}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            {/* <p>Company : {company.name}</p>
            <p>Address : {address.city}</p> */}
        </div>
    );
};

export default GetDetails;

/*username website phone email company address.city */