import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6',
    params:{
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoicHJnM3RpY25tZWRpYSIsImEiOiJjamhyZGcwZjIycTVmMzZxazl6cWxweTNxIn0.0ryMnkWLZHGQKlX8-J7J5Q'
    }
});

export default searchApi;