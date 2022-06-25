<script setup>
import SeatIcon from './SeatIcon.vue'
</script>
<template>
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
</template>