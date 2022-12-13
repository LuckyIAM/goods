import React, {useState} from "react";
import { useDispatch} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handler = (e) =>{
        e.preventDefault();
        
        dispatch({
            type: "ADD",
            playload: {name: name, price: price}
        })
    }
    return<form onSubmit={handler}>
        <input type="text" placeholder="Название товаров" value={name} onChange={ e => setName(e.target.value)}/>
        <input type="number" placeholder="Цена" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
        <button type="submit">Добавить</button>
    </form>
}