import { useState } from "react";

const PasswordField = () => {
    const [ViewPassword, setViewPassword] = useState('password');
    const [ViewEye, setViewEye] = useState('bi-eye-slash');
    const toggleViewPassword=()=>{
        if(ViewPassword === 'password'){
            setViewPassword('text');
            setViewEye('bi-eye');
        }
        else{
            setViewPassword('password');
            setViewEye('bi-eye-slash');
        }
            
    }
    return ( 
    <div className="input-group col-12 my-2">
        <input className="form-control border border-dark border-2" type={ViewPassword} placeholder="password"/>
        <span class="input-group-text btn btn-secondary" onClick={toggleViewPassword}><i class={`bi ${ViewEye}`}></i></span>
    </div>
     );
}
 
export default PasswordField;