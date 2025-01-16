<script lang="ts" src="./SearchResults.ts"></script>

<template>
    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>
    <ul v-else-if="places.length>0" class="list-group mt-3">

            <li v-for="place in places" :key="place.id" class="list-group-item list-group-item-action text-left" :class="{'active':place.id===activePlace}" @click="onPlaceCicked(place)">
                <h5>{{ place.properties.name}}</h5>
                <p>{{ place.properties.place_formatted }}</p>
                <div class="text-end">
                    <button class="btn btn-sm" :class="(place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary')"
                    @click.self="getRouteDirections(place)">
                        Direcciones
                    </button>
                </div>
            </li>        
            
        </ul>
</template>

<style scoped>
li{
    cursor: pointer;
}

h5{
    font-size: 15px!important;
}

p{
    font-size: 10px;
}
</style>