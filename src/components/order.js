import { useState } from "react";


const Order = ({ order, removeFromOrder, formatter }) => {
    const [isEditing, setIsEditing] = useState(false);


    const prevOrders = (
        JSON.parse(localStorage.getItem('savedOrder'))
    )

    const totalPrices = () => {
        const prices = order.reduce((acc, item) => {
            return acc + item.price;
        }, 0)
        return formatter.format(prices);
    }


    const viewOrderItem = (
        order.map((item) => (
            <li key={item.id}>
                <p>
                    <span>{item.amount}  </span>
                    {item.name}</p>
                <span>{formatter.format(item.price)}</span>
            </li>
        ))
    )

    const editOrderItem = (
        order.map((item) => (
            <li key={item.id}>
                <p>
                    <span>{item.amount} </span>
                    {item.name}</p>
                <button type='button' onClick={() => removeFromOrder(item.id)}>Remove</button>
                <span>{formatter.format(item.price)}</span>
            </li>
        ))
    )


    const orderEdit = (
        <ul>
            {editOrderItem}
        </ul>
    )

    const orderView = (
        <ul>
            {viewOrderItem}
        </ul>
    )

    return <div className="order-screen">
        <div className="order-cart">
            {isEditing ? orderEdit : orderView}
            <div className="order-total">
                <p>Order Total</p>
                <span>{totalPrices()}</span>
            </div>
            <div className="order-controls">
                <button type="button" onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}>Edit Order</button>
                <button type="button" onClick={() => localStorage.setItem('savedOrder', JSON.stringify(order))}>Place Order</button>

            </div>
        </div>
        <div className="placed-orders">
            
        </div>
    </div>;
}

export default Order;