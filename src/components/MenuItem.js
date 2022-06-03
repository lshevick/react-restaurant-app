import { useState } from "react";

const MenuItem = ({ DATA }) => {

    const appetizers = DATA.filter((item) =>
        item.category === 'Appetizers'
    )
        .map((item) => (
            <li key={item.id}>
                <p>
                    <button className="add-item">+</button>
                    {item.name}
                </p>
                <span>${item.price}</span>
            </li>
        ))

    const sushi = DATA.filter((item) =>
        item.category === 'Sushi'
    )
        .map((item) => (
            <li key={item.id}>
                <p>
                    <button className="add-item">+</button>
                    {item.name}
                </p>
                <span>${item.price}</span>
            </li>
        ))

    const dessert = DATA.filter((item) => 
                item.category === 'Dessert'
        )
            .map((item) => (
                <li key={item.id}>
                    <p>
                        <button className="add-item">+</button>
                        {item.name}
                    </p>
                    <span>${item.price}</span>
                </li>
            ))

    return (
        <>
            <div className="sub-menu appetizers">
                <h2>Appetizers</h2>
                <ul>
                    {appetizers}
                </ul>
            </div>

            <div className="sub-menu sushi">
                <h2>Sushi</h2>
                <ul>
                    {sushi}
                </ul>
            </div>

            <div className="sub-menu dessert">
                <h2>Dessert</h2>
                <ul>
                {dessert}
                </ul>
            </div>
        </>
    );
}

export default MenuItem;