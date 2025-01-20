<template>
  
  <MapView></MapView>
  <SearchBar></SearchBar>
  <MyLocationBtn></MyLocationBtn>
  <TripDetails></TripDetails>
</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
   MapView, MyLocationBtn, SearchBar, TripDetails
  },
  setup(){
    usePlacesStore();
  }
});
</script>
