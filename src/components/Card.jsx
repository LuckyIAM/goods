import React, {useContext} from "react";
import Ctx from "../Ctx";

export default ({name, price}) => {
    const {setCart} = useContext(Ctx);
    const add = (e) => {
        setCart( gds => {
            let result = gds. filter(el => el.name === name);
            if(result.length){
                 let newGds = gds.map(el => {
                    if(el.name === name){
                        el.cnt +=  1;
                    }
                    return el;
                 })
                return newGds
            }else{
                return [...gds,{name: name, price: price, cnt: 1}];
            }
        })
    }
    const remove = (e) => {
        setGoods(gds => gds.filter(el =>el.name !== name ))
    }

     return <li className="card">
        <h3>{name}</h3>
        <span className="price">{price}</span>
        <div>
            <button onClick={add}>Add to card</button>
            <button onClick={remove}>Remove</button>
        </div>
     </li>
}