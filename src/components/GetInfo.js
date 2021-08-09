import React from 'react';
import "./GetInfo.css";

function GetInfo() {
    return (
        <>
            <form class="alert alert-primary alert-dismissible fade show info-alert" role="alert">
            <h3 className="mb-5">Welcome To Naturalization Sample Quiz, Please Enter Information To Get Started</h3>
           <input className="form form-control form-input" type="text" name="" id="" placeholder="Enter Name"/>
            <input className="form form-control form-input" type="email" placeholder="Enter Email"/>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" name="close-btn"></button>
            <button className="btn btn-primary" type="submit"> Start Quiz</button>
 
            </form>
        </>
    )
}

export default GetInfo;

