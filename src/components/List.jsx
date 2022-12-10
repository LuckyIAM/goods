import React,{useContext} from "react";
import ctx from "../Ctx";

import Card from "./Card";

export default () => {
    const {goods}=useContext(ctx);
    return <ul className="cards-container">
        {goods.map((g,i) => <Card key={i} {...g}/>)}
    </ul>
}