<script setup>
import SeatIcon from './SeatIcon.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>
<template>
    <div class="flex flex-col gap-5 items-center">
        <div class="cinema"></div>
        <div class="flex justify-around items-center gap-8">
            <div v-for="(row,index) in store.state.seats" :key="index">
                <div class="flex flex-wrap w-24 gap-1" v-if="index===1">
                    <SeatIcon v-for="(seat,index) in row" :key="index" :state="seat.state" 
                    :position="seat.position"></SeatIcon>
                </div>
                <div class="flex flex-wrap w-12 gap-1" v-else>
                    <SeatIcon v-for="(seat,index) in row" :key="index" :state="seat.state"
                    :position="seat.position"></SeatIcon>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .cinema{
        border-top: 80px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        height: 0;
        width: 15rem;
        filter: drop-shadow(0 0 5px white);
    }
</style>