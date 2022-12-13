import React from "react";
import {useSelector} from "react-redux";

import Card from "./Card";

export default () => {
    const goods = useSelector(state => state.storeReducer)
    return <ul className="cards-container">
        {goods.map((g,i) => <Card key={i} {...g}/>)}
    </ul>
}