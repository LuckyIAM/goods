import React, {useContext} from "react";
import Ctx from "../Ctx";

export default ({name, cnt, price}) => {
    const {setCart} = useContext(Ctx);
    const inc = () =>{

    }
    const dec = () =>{

    }

    return<tr>
        <td>{name}</td>
        <td>
            <button onClick={dec} >-</button>
            <span>{cnt}</span>
            <button onClick={inc}>+</button>
        </td>
        <td>{price *cnt}</td>
    </tr>
}