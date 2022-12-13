/*
Функция возврашает данные аргумента action внутри
*/
const changeWord = (newWord) => {

    return {
        type: "CHANGEWORD",
        payload: newWord
    }
}
export {changeWord};