import { GetterTree } from 'vuex';
import state, { MapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady( state  ) {
        return !!state.map;
    }
}



export default getters;