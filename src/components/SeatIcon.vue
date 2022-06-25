<script setup>
    import { computed } from '@vue/reactivity'
    import { defineProps } from 'vue'
    import { useStore } from 'vuex'
    const store = useStore()
    const props = defineProps({
        state: String,
        position: Object
    })
    const conditionalColour = computed(()=>{
        switch(props.state){
            case 'selected':
                return 'background-color: rgb(56 189 248)'
            case 'unselected':
                return 'background-color: rgb(55 65 81)'
            case 'occupied':
                return 'background-color: rgb(239 246 255)'
        }
    })
    const conditionalStyle = computed(()=>{
        return props.position&&props.state!=='occupied'?
        'cursor-pointer hover:shadow-lg rounded-t-xl w-5 h-5 hover:shadow-[1px_1px_5px_rgb(255,255,255)]':
        'rounded-t-xl w-5 h-5'
    })
    function handleClick(){
        if(props.position){
            if(props.state==='selected'){
                store.commit('unselectSeat',props.position)
            }else if(props.state==='unselected'){
                store.commit('selectSeat',props.position)
            }
        } 
    }
</script>
<template>
    <div @click="handleClick()" :style="conditionalColour" 
    :class="conditionalStyle"></div>
</template>