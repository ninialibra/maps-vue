import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from "mapbox-gl";
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap( state, map: mapboxgl.Map) {
        state.map = map;
    },

    setPlaceMarkers(state, places:Feature[]){

        if(!state.map) return;

        state.markers.forEach(marker=>marker.remove());
        state.markers = [];

        for (const place of places) {
            const [lng, lat] = place.geometry.coordinates;

            const popup = new mapboxgl.Popup({offset:[0,-25]})
            .setLngLat([lng, lat])
            .setHTML(`
                <h4>${place.properties.name}</h4>
                <p>${place.properties.place_formatted}</p>
            `);

            const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(state.map);

            state.markers.push(marker);
        }
    }
}


export default mutation;