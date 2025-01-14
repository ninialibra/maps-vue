import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<PlacesState> = {
    setLngLat( state: PlacesState, {lng, lat}: {lng: number, lat: number}) {
        state.userLocation = [lng, lat];
        state.isLoading = false;
        
    },

    setisLoadingPlaces(state){
        state.isLoadingPlaces = true;
    },

    setPlaces(state, places:Feature[]){
        state.places = places;
        state.isLoadingPlaces = false;
    }
}


export default mutation;