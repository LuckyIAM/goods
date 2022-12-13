import React, {useState} from "react";
import { useDispatch } from "react-redux";

export default (props) => {
    const [word, setWord] = useState(props.w);
    const dispach = useDispatch();

    const handler = (e) =>{
        e.preventDefault();
        console.log(word);
        // dispach((changeWord(word)));
        dispach({type: "CHANGEWORD", payload: word})
    }
    return<form onSubmit={handler}>
        <input type="text" value={word} onChange={e => {setWord(e.target.value)}}/>
        <button type="submit">Change word</button>
    </form>
}