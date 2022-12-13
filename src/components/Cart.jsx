import React, {useContext, useState, useEffect} from "react";
import Ctx from "../Ctx";

import CartRow from "./CartRow";


export default () =>{
    const {cart} = useContext(Ctx);
    let n = cart.reduce((acc, el) => acc + el.price *el.cnt, 0)
    const [sum, setSum] =useState(n);


    useEffect(()=>{
        setSum(cart.reduce((acc, el) => acc + el.price * el.cnt, 0))
    },[cart])
    return<table>
        <thead>
            <tr>
                <th>Название товаров</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((el,i) => {
                return<CartRow key={i} {...el}/>
            })}
        </tbody>
        
        <tfoot>
            <td></td>
            <td>ИТОГО:</td>
            <td>{sum}</td>
        </tfoot>
    </table>
}