import { createStore } from 'vuex'
export default createStore({
  state: {
    movies: [],
    selectedMovie: 0,
    seats: [[],[],[]],
    seatsSelecteds: []
  },
  getters: {
    calculatePrice(state){
      if(state.movies[0]){
        return state.seatsSelecteds.length * state.movies[state.selectedMovie].info.ticketPrice 
      }else{
        return 0
      }
    },
  },
  mutations: {
    insertData(state,data){
      state.movies = [...data.movies]
    },
    selectMovie(state,selected){
      state.seats = [...[[],[],[]]]
      state.selectedMovie = selected
      localStorage.setItem('movieSelected',selected)
      for(let i = 0; i < state.seats.length; i++){
        let divisible = (i == 1) ? 2 : 4
        let index = Math.floor(state.movies[selected].totalSeats / divisible)
        for(let j = 0; j < index; j++){
            if(localStorage.getItem('seatsSelecteds')&&checkSeats(state,i,j,'selected')){
              state.seats[i] = [...state.seats[i],{position:{column:i,index:j},state:'selected'}]
              state.seatsSelecteds = [...state.seatsSelecteds, {column:i,index:j}]
            }else if(checkSeats(state,i,j,'available')){
              state.seats[i] = [...state.seats[i],{position:{column:i,index:j},state:'unselected'}]
            }else{
              state.seats[i] = [...state.seats[i],{position:{column:i,index:j},state:'occupied'}]
            }
          }
      }
    },
    selectSeat(state,position){
      state.seats[position.column][position.index] = {...state.seats[position.column][position.index],state:'selected'}
      state.seatsSelecteds = [...state.seatsSelecteds,position]
      localStorage.setItem('seatsSelecteds',JSON.stringify(state.seatsSelecteds))
    },
    unselectSeat(state,position){
      state.seats[position.column][position.index] = {...state.seats[position.column][position.index],state:'unselected'}
      state.seatsSelecteds.forEach((element,i) => {
        if(element.column === position.column && element.index === position.index){
          state.seatsSelecteds = [...state.seatsSelecteds.slice(0, i), ...state.seatsSelecteds.slice(i + 1)]
        }
      })
      localStorage.setItem('seatsSelecteds',JSON.stringify(state.seatsSelecteds))
    },
    unsetSeatsSelecteds(state){
      state.seatsSelecteds = [...[]]
      localStorage.setItem('seatsSelecteds',JSON.stringify(state.seatsSelecteds))
    }
  },
})
function checkSeats(state,i,j,condition){
  let bool = false
  const array = condition==='available'?state.movies[state.selectedMovie].availableSeats:
  JSON.parse(localStorage.getItem('seatsSelecteds'))
  array.forEach(element => {
    if(element.column === i && element.index === j){
      bool = true
    }
  })
  return bool
}
