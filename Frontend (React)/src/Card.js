

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Card = () => {
    return ( 

<div className="container text-center">
    <div className="row justify-content-center min-vh-100">
        <div className="col col-10 mycard align-self-center py-5 position-relative">
            <div className="content">
                <Outlet></Outlet>
                <Link to="/" className="">
                    <button type="button" className="btn-close border rounded-circle bg-white p-3 position-absolute top-0 end-0 m-3" aria-label="Close"></button>
                </Link>
            </div>
        </div>
    </div>
</div>



     );
}
 
export default Card;





