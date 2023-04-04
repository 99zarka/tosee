const Map = () => {
    return ( 
        <div className="container-fluid p-0 col-sm-8 col-lg-9 order-first order-sm-2" style={{minHeight:"55vh", overflow:"hidden"}}>
            <iframe
                title="map"
                width="100%"
                height="100%"
                loading="lazy"
                gestureHandling= "greedy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCqRTZd3DpHfowX-pcKn0AyfQUWGhwKTzQ&center=30.9000274,29.8761641&zoom=18&">
            </iframe>
        </div>
     );
}
 
export default Map;