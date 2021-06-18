import Geocode from "react-geocode";

async function fromGivenAddress(address, func) {
    Geocode.setApiKey(process.env.REACT_APP_API_KEY);

    //console.log(process.env.REACT_APP_API_KEY);

    Geocode.setLanguage("en");
    
    Geocode.setRegion("uk");

    return await Geocode.fromAddress(address).then(response => response.results[0].geometry.location);
}

export default fromGivenAddress;