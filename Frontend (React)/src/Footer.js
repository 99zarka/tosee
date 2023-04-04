

const Footer = () => {
    return ( 
        <div className="container-fluid dark p-0">
            <div className="row justify-content-center m-0">
                <div className="col-md col-8 order-md-1">
                    <p className="col-12 float-start"><a href="mailto:Tosee@gmail.com" className="float-start display-5">Tosee@gmail.com</a></p>
                    <p className="col-12 float-start"><a href="https://www.Tosee.live" className="float-start display-5">www.Tosee.live</a></p>
                    <div className="col-12 float-start m-3">
                        <div className="float-start">
                            <a href="https://www.facebook.com/tosee" className="mx-2" target="_blank" rel="noreferrer"><img className="" src="fb.svg" alt="Log in with Facebook" height="60"/></a>
                            <a href="https://www.google.com/tosee" className="mx-2" target="_blank" rel="noreferrer"><img className="" src="google.svg" alt="Log in with Google" height="60"/></a>
                            <a href="https://play.google.com/tosee" className="mx-2" target="_blank" rel="noreferrer"><img className="" src="googleplay.svg" alt="Log in with Google" height="60"/></a>
                        </div>
                     </div>
                </div>
            

                <div className="col-md col-8 align-self-center order-first order-md-2">
                    <div className="btn col-md-9 col-9 border border-light border-5 bg-transparent text-primary p-2 m-4" ><div className="h3">Request Now</div></div>
                </div>
                <div className="col-md col-0 order-last p-0"></div>
            </div>
        </div>



     );
}
 
export default Footer;