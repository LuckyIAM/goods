import React from "react";
import {useSelector} from "react-redux"
import ctx from "../Ctx";

import Card from "./Card";

export default () => {
    const goods = useSelector(state => state.storeReduce)
    return <ul className="cards-container">
        {goods.map((g,i) => <Card key={i} {...g}/>)}
    </ul>
}