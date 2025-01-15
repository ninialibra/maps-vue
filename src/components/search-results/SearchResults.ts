import { useMapStore, usePlacesStore } from '@/composables'
import { Feature } from '@/interfaces/places';
import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const {isLoadingPlaces, places, userLocation} = usePlacesStore();
        const {map, setPlaceMarkers} = useMapStore();
        const activePlace = ref('');

        watch(places, (newPlaces)=>{
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
        });
        
        return {

            isLoadingPlaces,
            places,
            activePlace,
            onPlaceCicked: (place:Feature)=>{
                activePlace.value = place.id;

                const [lng, lat] = place.geometry.coordinates;

                map.value?.flyTo({
                    zoom: 14,
                    center: [lng, lat]
                })
            }
        }
    },
})