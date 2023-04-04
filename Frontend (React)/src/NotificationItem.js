
import moment from 'moment';
import { useState } from "react";

const NotificationItem = (props) => {
    const imgURL= props.notification.imgURL;
    const user= props.notification.user;
    const msg= props.notification.msg;
    const iconURL= props.notification.iconURL;
    const timestamp= props.notification.timestamp * 1000; //convert seconds to milliseconds

    const timeago = moment(timestamp).fromNow();

    return ( 
        <div className="container">
            <div className="d-flex text-start my-2 py-1">
                <div className="pe-1 me-1">
                    <img src={imgURL} alt="profile" className="rounded-circle"  height="60" width="60"/>
                </div>
                <div className="mt-2">
                    <strong>{user} </strong>
                    <span className="">{msg} </span>
                    <img src={iconURL} alt="" className=""/>
                    <div className="">{timeago}</div>
                </div>
            </div>
        </div>
     );
}
 
export default NotificationItem;