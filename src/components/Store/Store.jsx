import NavBar from "../NavBar/NavBar";
import Card from "./components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Store = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [cart, setCart] = useState([]);
    const price = cart
        .reduce((acc, curr) => acc + curr.amount * curr.price, 0)
        .toFixed(2);
    const numItems = cart.reduce((acc, curr) => acc + curr.amount, 0);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    setErr("Error");
                } else {
                    response
                        .json()
                        .then((result) => setData(result))
                        .catch((err) => setErr(err));
                }
            })
            .catch((err) => setErr(err));
    }, []);

    if (data === null && err === null) {
        return <p>Loading...</p>;
    }

    if (err !== null) {
        return <button>Something went wrong!</button>;
    }

    const items = [];
    for (let i = 0; i < data.length; ++i) {
        items.push(
            <Card
                key={data[i].id}
                id={data[i].id}
                title={data[i].title}
                price={data[i].price}
                description={data[i].description}
                image={data[i].image}
                cart={cart}
                setCart={setCart}
            />,
        );
    }

    return (
        <>
            <div className={styles.menuContainer}>
                <NavBar numItems={numItems} price={price} />
                <div className={styles.menu}>
                    <Link to="/checkout" className={styles.checkout}>
                        Checkout {numItems} items for ${price}
                    </Link>
                </div>
            </div>
            <h1 className={styles.header}>Store</h1>
            <div className={styles.itemGrid}>{items}</div>
        </>
    );
};

export default Store;
