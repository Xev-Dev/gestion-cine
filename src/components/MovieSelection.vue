<script setup>
import { useStore } from 'vuex'
import { onMounted } from 'vue'
const store = useStore()
onMounted(()=>{
    if(!localStorage.getItem('movieSelected')){
        store.commit('selectMovie',0)
    }else{
        store.commit('selectMovie',localStorage.getItem('movieSelected'))
    }   
})
</script>
<template>
    <div class="flex gap-3 items-center">
        <label>Pick a movie:</label>
        <select v-model="store.state.selectedMovie" @change="($event)=>{store.commit('unsetSeatsSelecteds'),store.commit('selectMovie',$event.target.value)}" 
         class="rounded-lg pl-2 py-1 text-black appearance-none">
            <option v-for="(movie,index) in store.state.movies" :value="index" 
            :key="movie.info.name">{{`${movie.info.name} ($${movie.info.ticketPrice})`}}</option>
        </select>
    </div>
</template>