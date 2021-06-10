import Geocode from "react-geocode";

function fromGivenAddress(address) {
    Geocode.setApiKey(process.env.REACT_APP_API_KEY);

    //console.log(process.env.REACT_APP_API_KEY);

    Geocode.setLanguage("en");
    
    Geocode.setRegion("uk");
    
    var position = { lat: 0.0, lng: 0.0 };
    Geocode.fromAddress(address).then(
        response => {
            position = response.results[0].geometry.location;
        },
        error => {
            console.error(error);
        }
    );
    return position;
}

export default fromGivenAddress;