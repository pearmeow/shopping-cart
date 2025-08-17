import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./styles.module.css";

const Card = ({ id, title, price, description, image, cart, setCart }) => {
    const [addItems, setAddItems] = useState(1);
    const handleInput = (e) => {
        if (Number(e.target.value) !== 0) {
            setAddItems(Number(e.target.value));
        }
    };
    const incr = () => {
        setAddItems(addItems + 1);
    };
    const decr = () => {
        if (addItems > 1) {
            setAddItems(addItems - 1);
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
            <div className={styles.item}>
                <img src={image} alt={title} className={styles.image} />
                <h3>{title}</h3>
                <p className={styles.desc}>{description}</p>
                <p>${price}</p>

                <div className={styles.interactive}>
                    <label htmlFor={id}>Items</label>
                    <input
                        id={id}
                        type="number"
                        min={1}
                        onChange={handleInput}
                        value={addItems}
                    />
                    <button type="button" onClick={decr}>
                        -
                    </button>
                    <button type="button" onClick={incr}>
                        +
                    </button>
                    <button type="button" onClick={addToCart}>
                        Add
                    </button>
                </div>
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
