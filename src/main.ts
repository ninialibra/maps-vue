import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoicHJnM3RpY25tZWRpYSIsImEiOiJjamhyZGcwZjIycTVmMzZxazl6cWxweTNxIn0.0ryMnkWLZHGQKlX8-J7J5Q';

if(!navigator.geolocation){
    throw new Error("Tu navegador no soporta el Geolocation");    
}

createApp(App).use(store).use(router).mount('#app')
