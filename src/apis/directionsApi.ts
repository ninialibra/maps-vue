import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicHJnM3RpY25tZWRpYSIsImEiOiJjamhyZGcwZjIycTVmMzZxazl6cWxweTNxIn0.0ryMnkWLZHGQKlX8-J7J5Q'
    }
});

export default directionsApi;