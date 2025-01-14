import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        //TODO: colocar loading

        navigator.geolocation.getCurrentPosition(
            ({coords}) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            (err)=>{
                console.log(err);
                throw new Error("No geolocation");
                
            }
        )
    },

    async searchPlacesByTerm({commit, state}, query:string): Promise<Feature[]>{

        if(query.length===0){
            commit('setPlaces', []);
            return [];
        }

        if(!state.userLocation){
            throw new Error('No hay ubicación del usuario');
        }
        
        commit('setisLoadingPlaces');

        const respuesta = await searchApi.get<PlacesResponse>('/forward',{
            params: {
                q: query,
                proximity: state.userLocation?.join(',')
            }
        });

        commit('setPlaces', respuesta.data.features);

        return respuesta.data.features;        
        
    }
}



export default actions;