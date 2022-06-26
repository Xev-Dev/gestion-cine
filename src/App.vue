<script setup>
  import { onBeforeMount } from 'vue'
  import { useStore } from 'vuex'
  import MovieSelection from './components/MovieSelection.vue'
  import SeatPicker from './components/SeatPicker.vue'
  import SeatIcon from './components/SeatIcon.vue'
  import data from './assets/app-data.json'
  const store = useStore()
  onBeforeMount(()=>store.commit('insertData',data))
</script>
<template>
    <div class="h-full w-full flex flex-col justify-center items-center gap-8">
      
      <MovieSelection></MovieSelection>

      <div class="flex bg-indigo-300 w-64 items-center justify-around py-1 rounded-lg">
        <span class="flex gap-1 items-center">
          <SeatIcon state="unselected"></SeatIcon>  
          <p class=" text-black text-xs">N/A</p>
        </span>
        <span class="flex gap-1 items-center">
          <SeatIcon state="selected"></SeatIcon>
          <p class="text-black text-xs">Selected</p>
        </span>
        <span class="flex gap-1 items-center">
          <SeatIcon state="occupied"></SeatIcon>
          <p class="text-black text-xs">Occupied</p>
        </span>
      </div>

      <SeatPicker></SeatPicker>

      <p>
        You have selected <strong class="text-sky-400">{{store.state.seatsSelecteds.length}}
        </strong> seats for a price of $<strong class="text-sky-400">{{store.getters.calculatePrice}}</strong>
      </p>

    </div>
</template>