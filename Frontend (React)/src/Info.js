import { useState } from "react";
import { Link } from "react-router-dom";

const Info = () => {

    const [blindName, setBlindName] = useState('Mohamed');
    const [location, setLocation] = useState('Loading name');
    const [address, setAddress] = useState('39 Port Said St Kafr El Dawar,Elbehira');
    const [distance, setDistance] = useState('18');
    const [battery, setBattery] = useState('55');

    
    return ( 
        <div className="info-bar container-fluid p-0 col-sm-4 col-lg-3 order-last order-sm-1 second-color position-relative col">
            <div className="p-4">
                <h4 className="d-flex justify-content-start mx-3">ToSee</h4>
                <div className="col-sm d-flex justify-content-start mt-5">
                    <img className="rounded-circle" src="profile.jpg" alt="profile pic" height="40" width="40"/>
                    <span className="h6 mx-3 my-0 align-self-center">{blindName}</span>
                    <img className="ms-2 align-self-center bg-white rounded-circle p-1" src="loc.svg" alt="" height="22" width="22"/>
                </div>

                <div className="d-flex justify-content-start mt-4 text-start">
                    <i class="bi bi-geo-alt-fill mx-4"></i>
                    <p className="">{address}</p>
                </div>

                <div className="d-flex justify-content-start mt-1 text-start">
                    <i class="bi bi-circle-fill mx-4"></i>
                    <p className="">Distance between you {distance} Km</p>
                </div>


                <div className="col border-bottom border-2 border-dark my-5"></div>



                <div className="col-sm d-flex justify-content-start">
                    <img className="" src="glasses.svg" alt="glasses" height="40" width="40"/>
                    <span className="h6 mx-3 my-0 align-self-center text-start">Smart glasses</span>
                    <i class="bi bi-info-circle-fill text-white ms-2 align-self-center"></i>
                </div>
                
                <div className="d-flex justify-content-center">
                    {battery>69 &&
                        <i class="bi bi-battery-full fs-2"></i>}
                    {battery>29 && battery<69 &&
                        <i class="bi bi-battery-half fs-2"></i>}
                    {battery>-1 &&  battery<29 &&
                        <i class="bi bi-battery fs-2"></i>}
                    <div className="ms-2 align-self-center">{battery} %</div>
                </div>
                    
                


                <Link to="/" className="position-absolute bottom-0 start-0 m-3 text-white">about us</Link>
            </div>
        </div>
    );
}
 
export default Info;