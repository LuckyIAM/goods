import React, { useState, useEffect} from "react";
import "./index.scss";
import Ctx from "./Ctx";

import List from "./components/List";
import Form from "./components/Form";
import Cart from "./components/Cart";

export default () => {
    let cartSt = localStorage.getItem("c")
    if(cartSt){
        cartSt = JSON.parse(cartSt)
    }else{
        cartSt =[];
    }

    const [cart, setCart] = useState(cartSt);

    

    useEffect(() => {
        console.log(cart);
        localStorage.setItem("c", JSON.stringify(cart));
    }, [cart])


    return <Ctx.Provider value={{
        cart: cart,
        setCart: setCart
    }}>
        <h2>Добавить товаров</h2>
        <Form/>
        <h2>Список товаров</h2>
        <List/>
        <h2>Корзина</h2>
        <Cart/>
    </Ctx.Provider>
}
