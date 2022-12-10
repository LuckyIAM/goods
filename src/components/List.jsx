import React,{useContext} from "react";
import ctx from "../Ctx";

import Cart from "./Cart";

export default () => {
    const {goods}=useContext(ctx);
    return <ul className="cards-container">
        {goods.map((g,i) => <Card key={i} {...g}/>)}
    </ul>
}