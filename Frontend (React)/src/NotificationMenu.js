import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationItem from "./NotificationItem";

const NotificationMenu = () => {

  const [notificationData, setNotificationData] = useState([
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you send image for you send image for you send image for you send image for you",iconURL:"bettery.svg", timestamp:1677761256},
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you",iconURL:"bettery.svg", timestamp:1677761256},
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you",iconURL:"bettery.svg", timestamp:1677761256},
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you",iconURL:"bettery.svg", timestamp:1677761256},
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you",iconURL:"bettery.svg", timestamp:1677761256},
    {imgURL:"profile.jpg",user: "mohamed",msg:"send image for you",iconURL:"bettery.svg", timestamp:1677761256}
  ]);


        return (
            <div className="">

<div className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <Link to="#" className="nav-link py-sm-3 px-2" title="" data-bs-placement="right" data-bs-original-title="Notifications" >
        <i className="bi-bell fs-2 text-white"></i>
    </Link>
</div>


<div className={`offcanvas ${window.innerWidth>576?"offcanvas-start":"offcanvas-top h-50"} notification-list`} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="d-flex flex-column justify-content-start">
      {notificationData.map(noti => (<NotificationItem notification={noti} />))}
    </div>
  </div>
</div>


</div>
        );
}
 
export default NotificationMenu;