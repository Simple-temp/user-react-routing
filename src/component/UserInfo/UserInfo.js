import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = (props) => {
    const {name,id} = props.user;
    return (
        <div className='container'>
            <div className="row info">
                <div className="col-lg-6 col-md-6 col-12">
                    <p>Id : {id}</p>
                    <p>Name : {name}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <p className='btn btn-primary'> <Link className='link' to={`/getdetails/${id}`}>Get Details</Link></p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;