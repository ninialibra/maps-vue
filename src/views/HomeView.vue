<template>
  <MapView></MapView>
</template>

<script lang="ts">
import MapView from '@/components/mapview/MapView.vue';
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
   MapView
  },
  setup(){
    usePlacesStore();
  }
});
</script>
