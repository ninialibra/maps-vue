import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = '';

if(!navigator.geolocation){
    throw new Error("Tu navegador no soporta el Geolocation");    
}

createApp(App).use(store).use(router).mount('#app')
