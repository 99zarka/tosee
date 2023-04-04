import moment from 'moment';

const SingleMessage = (props) => {
    const imgURL= props.msg.imgURL;
    const isReceived=props.msg.isReceived;
    const msg= props.msg.msg;
    const timestamp= props.msg.timestamp * 1000; //convert seconds to milliseconds
    const timeago = moment(timestamp).fromNow();

    const baseClasses="p-3 m-2 text-start text-white";
    const receivedClasses=" dark me-auto";
    const senderClasses=" less-dark ms-auto";
    const classes=isReceived?baseClasses+receivedClasses:baseClasses+senderClasses;

    return (
    
    <div className={classes} style={{borderRadius:"20px",maxWidth:"60%"}}>
        <div className="" style={{whiteSpace:"pre-wrap",overflowWrap:"break-word"}}>{msg}</div>
        {imgURL&&msg&&<br className=""></br>}
        {imgURL&&<img src={imgURL} className="img-fluid rounded-5" style={{maxHeight:"50vh"}}/>}
        <div className="text-white-50">{timeago}</div>
    </div>
     );
}
 
export default SingleMessage;