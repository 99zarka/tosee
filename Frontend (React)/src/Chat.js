
import { useState } from 'react';
import MessageBox from './MessageBox';
const Chat = () => {
    const [unreadMessages, setUnreadMessages] = useState(4);
    const [username, setUsername] = useState("Mohamed");
    const [isOnline, setIsOnline] = useState(true);

    return ( 
        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
                <div className="col-12 col-md-3 col-lg-4 order-md-1 p-0">
                    <div className="m-3 m-md-3 m-lg-5 p-3 mt-md-5" style={{backgroundColor:"#C4EEF2",borderRadius:"50px"}}>
                        <div className="d-flex flex-column">
                            <div className="d-flex">
                                <img src="profile.jpg" alt="profile" className="pe-1 me-1 rounded-circle"  height="60" width="60"/>
                                <div className="">
                                    <div className="mt-3"><strong> {username}</strong></div>
                                    {isOnline&&<div className="text-start"><span style={{color:"Chartreuse"}}>●</span> online</div>}
                                    {!isOnline&&<div className="text-start"><span className="text-secondary">●</span> offline</div>}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center my-3">
                                <button className="btn btn-light px-2 fs-3 m-2" style={{borderRadius:"12px"}}><i class="bi bi-telephone"></i></button>
                                <button className="btn btn-light px-2 fs-3 m-2" style={{borderRadius:"12px"}}><i class="bi bi-camera-video"></i></button>
                                <button className="btn btn-light px-2 fs-3 m-2" style={{borderRadius:"12px"}}><i class="bi bi-volume-mute"></i></button>
                            </div>
                            <p className="mt-3 text-start">Unread Messeges <span className="rounded-pill px-3 py-1 text-white" style={{backgroundColor:"#4077BA"}}>{unreadMessages}</span></p>
                            <button className="btn btn-info dark text-white rounded-pill text start mb-4 me-auto">Capture Photo</button>
                        </div>
                    </div>
                    <div className="m-3 m-md-3">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Attatchment
                        </button>
                        <div className="collapse" id="collapseExample">
                            <div clasclassNames="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
                <MessageBox/>
                

                
            </div>
        </div>
     );
}
 
export default Chat;