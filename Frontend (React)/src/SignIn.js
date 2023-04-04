import { Link } from "react-router-dom";
import PasswordField from "./PasswordField";
import SignWith from "./SignWith";

const SignIn = () => {
    return ( 

    <div className="row justify-content-evenly">
        <div className="col-md-5">


            <div className="col-12 my-2 float-start">
                <h2 className="float-start">Sign In</h2>
            </div>

            <div className="col-12 my-2 float-start">
                <p className="float-start">New user? <Link to="/create" className="">Create an account</Link></p>
            </div>

            <div className="col-12 my-2"><input className="form-control border border-dark border-2" type="email" placeholder="Username or email" /></div>
            <PasswordField/>
            <div className="col-12 my-2 form-check">
                <input type="checkbox" className="form-check-input border border-dark border-2 text-start" id="check1" name="option1" value="something"></input>
                <label className="form-check-label float-start" htmlFor="check1">Keep me signed in</label>
            </div>

            <button className="btn btn-primary col-12 my-2 p-2 border border-dark border-1">Sign In</button>

            <div className="row my-2"><hr className="col align-self-center"/><p className="col-auto">Or Sign In With</p><hr className="col align-self-center"/></div>

            <SignWith/>


        </div>

        <div className="col-md-4 align-self-center">
            <img className="img-fluid" src="signin.svg" alt="" />
        </div>
    </div>
     );
}
 
export default SignIn;