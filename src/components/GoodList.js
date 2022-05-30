import GoodItem from "./GoodItem";
import React from "react";
export default function GoodList(props) {
    const {goods = [], AddToBasket} = props;

    if(!goods.length) {
        return <h3>Nothing Found</h3>
    }
    
    return(
        <div className="goods">
            {goods.map((item) => (
                <GoodItem key={item.id} {...item} AddToBasket={AddToBasket}/>
            ))}
        </div>
    )
}