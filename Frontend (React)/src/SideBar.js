import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NotificationMenu from "./NotificationMenu";


const SideBar = () => {
    const [isMobile, setIsMobile] = useState(false);
/*
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 576) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }


    // create an event listener
    useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize)
    })
*/


    return (
<div className="container-fluid p-0">
    <div className="row m-0">
        <div className="side-bar col-sm-auto bg-light p-0 sticky-top">
            <div className="side-bar d-flex flex-sm-column flex-row flex-nowrap pt-sm-4 align-items-center sticky-top dark">
                <div className="bg-white rounded-circle">
                    <Link to="/" className="d-block p-0 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                        <img className="" src="logo.svg" alt="to see logo" height="40" width="40"/>
                    </Link>
                </div>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-evenly w-100 px-3">
                    <li className="nav-item py-sm-3">
                        <Link to="/home" className="nav-link py-sm-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house-door fs-2 text-white"></i>
                        </Link>
                    </li>
                    <li className="nav-item py-sm-3">
                        <Link to="/chat" className="nav-link py-sm-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-chat-left fs-2 text-white"></i>
                        </Link>
                    </li>
                    <li className="nav-item py-sm-3">
                        <NotificationMenu />
                    </li>
                </ul>
                <div className="dropend">
                    <Link to="#" className="d-flex align-items-center justify-content-center py-sm-3 link-dark text-decoration-none" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2 text-white"></i>
                    </Link>
                    {/* <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><Link className="dropdown-item" to="#">New project...</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                    </ul> */}
                </div>
                <Link to="/signin" className="nav-link py-sm-3  px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                    <i className="bi-box-arrow-right fs-2 text-white"></i>
                </Link>
            </div>

            

        </div>

        <div className="col-sm p-0">
            <Outlet></Outlet>
        </div>



    </div>
</div>
    );
}
 
export default SideBar;