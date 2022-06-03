import { useState } from "react";

const Order = () => {
    const [isEditing, setIsEditing] = useState(false);

    const orderEdit = (
        <ul>
            <li>
                <p>Gyoza</p>
                <button type='button'>Remove</button>
                <span>$4.00</span>
            </li>

            <li>
                <p>Edamame</p>
                <button type='button'>Remove</button>
                <span>$2.00</span>
            </li>

            <li>
                <p>California Roll</p>
                <button type='button'>Remove</button>
                <span>$5.00</span>
            </li>

            <li>
                <p>Spider Roll</p>
                <button type='button'>Remove</button>
                <span>$9.00</span>
            </li>
        </ul>
    )

    const orderView = (
        <ul>
            <li>
                <p>Gyoza</p>
                <span>$4.00</span>
            </li>

            <li>
                <p>Edamame</p>
                <span>$2.00</span>
            </li>

            <li>
                <p>California Roll</p>
                <span>$5.00</span>
            </li>

            <li>
                <p>Spider Roll</p>
                <span>$9.00</span>
            </li>
        </ul>
    )

    return <div className="order-screen">
        <div className="order-cart">
            <ul>
                <li>
                    <p>Gyoza</p>
                    <span>$4.00</span>
                </li>

                <li>
                    <p>Edamame</p>
                    <span>$2.00</span>
                </li>

                <li>
                    <p>California Roll</p>
                    <span>$5.00</span>
                </li>

                <li>
                    <p>Spider Roll</p>
                    <span>$9.00</span>
                </li>
            </ul>
            <div className="order-total">
                <p>Order Total</p>
                <span>$20.00</span>
            </div>
            <div className="order-controls">
                <button type="button">Edit Order</button>
                <button type="button">Place Order</button>
            </div>
        </div>
    </div>;
}

export default Order;