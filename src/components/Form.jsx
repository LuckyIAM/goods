import React, {useState, useContext} from "react";
import Ctx from "../Ctx"


export default () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const {setGoods} = useContext(Ctx);

    const handler = (e) =>{
        e.preventDefault();
        setGoods(gds => {
            let has = gds.filter(el => el.name.toLowerCase() === name.toLowerCase())
            return has.length ? gds : [...gds, {name: name, price: price}];
        })
    }
    return<form onSubmit={handler}>
        <input type="text" placeholder="Название товаров" value={name} onChange={ e => setName(e.target.value)}/>
        <input type="number" placeholder="Цена" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)}/>
        <button type="submit">Добавить</button>
    </form>
}