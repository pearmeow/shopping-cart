import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({
    id,
    title,
    price,
    description,
    category,
    image,
    cart,
    setCart,
}) => {
    const [addItems, setAddItems] = useState(1);
    const handleInput = (e) => {
        if (Number(e.target.value) !== 0) {
            setAddItems(Number(e.target.value));
        }
    };
    const addToCart = () => {
        let currCart = cart.slice();
        let hasItem = false;
        for (let i = 0; i < currCart.length; ++i) {
            if (currCart[i].id === id) {
                currCart[i].amount += addItems;
                hasItem = true;
            }
        }
        if (!hasItem) {
            currCart.push({
                id: id,
                amount: addItems,
                price: price,
            });
        }
        setCart(currCart);
    };
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>${price}</p>

                <label htmlFor={id}>Items</label>
                <input
                    id={id}
                    type="number"
                    min={1}
                    onChange={handleInput}
                    value={addItems}
                />
                <button type="button" onClick={addToCart}>
                    Add to cart
                </button>
            </div>
        </>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
};

export default Card;
