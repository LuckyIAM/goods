import React, { useState, useEffect} from "react";
import "./index.css";
import Ctx from "./Ctx";

import List from "./components/List";
import Form from "./components/Form";

export default () => {
    let goodsSt = localStorage.getItem("g")
    if(goodsSt){
        goodsSt = JSON.parse(goodsSt)
    }else{
        goodsSt =[];
    }

    let cartSt = localStorage.getItem("g")
    if(cartSt){
        cartSt = JSON.parse(cartSt)
    }else{
        cartSt =[];
    }
    const [goods, setGoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(goods);
        localStorage.setItem("g", JSON.stringify(goods));
    }, [goods])

    useEffect(() => {
        console.log(cart);
        localStorage.setItem("c", JSON.stringify(cart));
    }, [cart])


    return <Ctx.Provider value={{
        goods: goods,
        cart: cart,
        setGoods: setGoods,
        setCart: setCart
    }}>
        <h2>Добавить товаров</h2>
        <Form/>
        <h2>Список товаров</h2>
        <List/>
        <h2>Корзина</h2>
    </Ctx.Provider>
}
