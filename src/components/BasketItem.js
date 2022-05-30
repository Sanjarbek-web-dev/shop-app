import React from "react";
export default function BasketItem(props) {
    const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
    return(
        <li className="collection-item">
            {name} x {quantity} = {price * quantity} <b>$</b>
            <span className="secondary-content btnCollex">
                <a className="btn-floating btn-small waves-effect waves-light  success" onClick={()=> incrementQuantity(id)}><i class="material-icons">add</i></a>
                <a className="btn-floating btn-small waves-effect waves-light m-right-2 red" onClick={()=> decrementQuantity(id)}><i class="material-icons">remove</i></a>
                <i className="material-icons basket-delete" 
                onClick={() => props.removeFromBasket(id)}>delete_forever</i>
            </span>
        </li>
    )
} 