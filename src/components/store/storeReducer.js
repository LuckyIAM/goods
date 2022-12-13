let initialState = localStorage.getItem("g")
if (initialState){
    initialState = JSON.parse(initialState)
} else{
    initialState = [];
}

export default(state = initialState, action) => {
    switch(action.type){
        case "ADD":
            const result = state.filter(el => el.name.toLowerCase() === action.payload.name.toLowerCase())
            return result.length ? state : [...state, {name: action.payload.name, price: action.payload.price}]
        case "DEL":
            return state => state.filter(el =>el.name !== action.payload.name )
        default: return state
    }
}