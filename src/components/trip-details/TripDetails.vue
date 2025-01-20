<template>
  <div v-if="distance" class="trip-container column">
    <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
    <div class="col">Duración: <strong>{{ duration }} minutos</strong></div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent( {
    name: 'TripDetails',
    setup() {

        const {distance, duration} = useMapStore();

        return {
            distance,
            duration
        };
    }

});
</script>

<style scoped>
.trip-container{
    padding: 10px;
    position: fixed;
    bottom: 40px;
    left: 20px;
    border-radius: 10px;
    background-color: white;
    font-size: 25px;
    width: 350px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}

strong{
    color: #42b983;
}
</style>