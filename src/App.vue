<script setup>
  import { onBeforeMount } from 'vue'
  import { useStore } from 'vuex'
  import MovieSelection from './components/MovieSelection.vue'
  import ColorLegend from './components/ColorLegend.vue'
  import SeatPicker from './components/SeatPicker.vue'
  import data from './assets/app-data.json'
  const store = useStore()
  onBeforeMount(()=>store.commit('insertData',data))
</script>
<template>
    <div class="h-full w-full flex flex-col justify-center items-center gap-8">
      <MovieSelection></MovieSelection>
      <ColorLegend></ColorLegend>
      <SeatPicker></SeatPicker>
      <p>
        You have selected <strong class="text-sky-400">{{store.state.seatsSelecteds.length}}
        </strong> seats for a price of $<strong class="text-sky-400">{{store.getters.calculatePrice}}</strong>
      </p>
    </div>
</template>