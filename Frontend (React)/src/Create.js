import { Link } from "react-router-dom";
import SignWith from "./SignWith";
import { useState } from "react";
import PasswordField from "./PasswordField";

const Create = () => {



    return (

    <div className="row justify-content-evenly">
        <div className="col-md-5">
            <div className="col-12 my-2 float-start">
                <h2 className="float-start">Create An Account</h2>
            </div>
            <div className="col-12 my-2 float-start">
                <p className="float-start">Already a user? <Link to="/signin" className="">Sign In</Link></p>
            </div>
            <div className="row justify-content-evenly my-2">
                <div className="col">
                    <input className="form-control border border-dark border-2" type="first name" placeholder="first name"/>
                </div>
                <div className="col">
                    <input className="form-control border border-dark border-2" type="last name" placeholder="last name" />
                </div>
            </div>

            <div className="col-12 my-2"><input className="form-control border border-dark border-2" type="email" placeholder="email" /></div>
            <PasswordField/>

            <button className="btn btn-primary col-12 my-2 p-2 border border-dark border-1">Sign Up</button>

            <div className="row my-2"><hr className="col align-self-center"/><p className="col-auto">Or Sign up With</p><hr className="col align-self-center"/></div>

            <SignWith/>

        </div>


        <div className="col-md-5 align-self-center">
            <img className="img-fluid" src="create.svg" alt="" />
        </div>



        
    </div>



     );
}
 
export default Create;