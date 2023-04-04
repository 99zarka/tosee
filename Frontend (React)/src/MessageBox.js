import { useEffect, useRef, useState } from "react";
import SingleMessage from "./SingleMessage";

const MessageBox = () => {
    const user="Mohamed"
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null)
    const textInput = useRef(null)
    const messageList = useRef(null)

    const [messageData, setMessageData] = useState([
        {imgURL:"",isReceived: true,msg:"send  image for you send image for you send image for you sendimage for you send image for you send image for you sendimage for you send image for you send image for you sendimage for you send image for you send image for you sendimage for you send image for you send image for you sendimage for you send image for you send image for you send image for you send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: false,msg:"send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: true,msg:"send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: false,msg:"send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: true,msg:"send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: false,msg:"send image for you", timestamp:1677761256},
        {imgURL:"",isReceived: true,msg:"send image for you", timestamp:1677761256},
        {imgURL:"profile.jpg",isReceived: false,msg:"send image for you", timestamp:1677761256},
        {imgURL:"profile.jpg",isReceived: true,msg:"", timestamp:1677761256},
        {imgURL:"https://a.pinatafarm.com/1704x2102/b6949851da/surprised-pikachu-high-quality.jpg",isReceived: false,msg:"send image for you", timestamp:1677761256}
      ]);
    
    const insertMessage = () => {
        if(newMessage.trim()){
            var newObject = {imgURL:"",isReceived: false,msg:newMessage.trim(), timestamp:Date.now()/1000}
            setMessageData([...messageData, newObject])
            setNewMessage("");
            textInput.current.style.height="0px";
            
            setTimeout(() => {
                messageList.current.scrollTo({top: messageList.current.scrollHeight, behavior: 'smooth'})
            }, 1);
            
        }
    }


    const scrollToBottom = () => {
        //messagesEndRef.current?.scrollIntoView()
        messageList.current.scrollTo({top: messageList.current.scrollHeight} )
      }
    function autoExpand(){
        textInput.current.style.height="0px";
        textInput.current.style.height=textInput.current.scrollHeight+2+"px";
    }
    
      useEffect(() => {
        scrollToBottom()
      },[]);

    return ( 
        <div className="col-12 col-md-9 col-lg-8 order-first order-md-2 mt-md-5 p-0 d-flex flex-column justify-content-center" style={{minHeight:"86vh"}}>
            <div className="text-start d-flex w-100 dark align-items-center text-white" style={{borderTopLeftRadius:"34px"}}>
                <img src={"profile.jpg"} alt="profile" className="rounded-circle p-2 ms-2 ms-md-4"  height="60" width="60"/>
                <span className="me-auto">converstion with <strong>{user}</strong></span>
                <div className="searchbar flex-grow-1 d-flex">
                    <input id="search" className="ms-auto form-control mr-sm-2 p-0 search_input" type="search" placeholder="Search" aria-label="Search" required />
                    <i class="bi bi-search search_icon"></i>
                </div>
            </div>
            <div className="border-dark-custom flex-grow-1 d-flex flex-column justify-content-center">
                <div className="msg-container flex-grow-1 d-flex flex-column" style={{overflow:"auto",height:"5px"}} ref={messageList}>
                    {messageData.map(message => (<SingleMessage msg={message} />))}

                    <div ref={messagesEndRef} className="" style={{height:"0px", width:"0px"}}></div>
                </div>

                <div className="input-group mb-2 mt-2 border-dark-custom-2 p-3 pb-md-0 ms-auto me-auto d-flex" style={{width:"85%"}}>
                    <textarea  type="text" className="form-control col-8" placeholder="Write a message..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onInput={() => autoExpand(textInput)} ref={textInput}  style={{maxHeight:"40vh",height:"0px"}}
                    onChange={(e) => setNewMessage(e.target.value)} onKeyUp={(e) => {if(e.key === 'Enter' && window.innerWidth>768 && !e.shiftKey) insertMessage();}} value={newMessage}>
                    </textarea>

                    <img src="mic.svg" alt="mic" height="20px" width="20px" className="mx-2 img-fluid"/>
                    <img src="send.svg" alt="send message" height="25px" width="25px" className="mx-2 img-fluid" onClick={insertMessage}/>
                    <div className="w-100 text-start text-muted fs-6 d-none d-md-block">press shift+enter for new lines</div>
                </div>
            </div>
        </div>
     );
}
 
export default MessageBox;