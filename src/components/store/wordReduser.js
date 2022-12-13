const initialState = "Apple"
const wordReducer = (state = initialState, action) => {
    /*action - прослушивание новых данных
    action.type - изменяемый тип (строка)
    action.payload - новые данные
    */

    switch(action.type){
        case "CHANGEWORD":
            return action.payload;
        default: return state;
    }
}
export default wordReducer;