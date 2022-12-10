import React, {useContext, useState, useEffect} from "react";
import Ctx from "../Ctx";

export default () =>{
    const {cart} = useContext(Ctx);
    let n = cart.reduce((acc, el) => acc + el.price *el.cnt, 0)
    const [sum, setSum] =useState(0);


    useEffect(()=>{
        setSum(cart.reduce((acc, el) => acc + el.price * el.cnt, 0))
    })
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
                <CartRow key={i} {...e}/>
            })}
            <tfoot>
                <td></td>
                <td>ИТОГО:</td>
                <td>{sum}</td>
            </tfoot>
        </tbody>
    </table>
}