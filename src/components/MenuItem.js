
const MenuItem = ({ item, addToOrder, formatter }) => {

    return (
        <li>
            <p>
                <button className="add-item" onClick={() => addToOrder(item)}>+</button>
                {item.name}
            </p>
            <span>{formatter.format(item.price)}</span>
        </li>
    );
}

export default MenuItem;