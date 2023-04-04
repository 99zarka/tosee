


const About = () => {
    return ( 
        <div className="container-fluid p-0">
            <h4 className="d-flex justify-content-start mx-3">ToSee</h4>
            <h1 className="">About Us</h1>
            <div className="d-flex justify-content-center">
                <p className="display-6 w-75">To See will make a big difference in the everyday lives of blind people</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="ratio ratio-16x9" style={{width:"90%",maxHeight:"80vh"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lfq0jMyAXKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                </div>
            </div>

            <div className="row justify-content-center my-5 mx-0 pt-5" style={{background: "#F7F7F7"}}>
                <div className="col-md-5 align-self-center text-start">
                    <h1 className="">This is Magic</h1>
                    <p className="">“Everything that can be done to improve the lives of visually impaired people is incredible."</p>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src="about1.svg" alt="" />
                </div>
            </div>

            <div className="row justify-content-center  mx-0 pt-5">
                <div className="col-md-5">
                    <img className="img-fluid" src="about2.svg" alt="" />
                </div>
                <div className="col-md-5 align-self-center text-start">
                    <h1 className="">Our mission</h1>
                    <p className="">To see mission is to harness the power of artificial vision by incorporating pioneering technology into a wearable platform which improves the lives of individuals who are.</p>
                </div>
            </div>

            <div className="row justify-content-center mx-0 pt-5" style={{background: "#F7F7F7"}}>
                <div className="col-md-5 align-self-center text-start">
                    <h1 className="">To See</h1>
                    <div className="">
                        <p className="">Wearable technology for people who are blind or visually impaired.</p>
                        <p className="">Voice-activated device that provides increased independence by communicating visual information, audibly.</p>
                        <p className="">With To see you can read text, recognize faces, identify products.</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src="about3.svg" alt="" />
                </div>
            </div>
        </div>



     );
}
 
export default About;





