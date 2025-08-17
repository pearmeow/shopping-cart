import NavBar from "../NavBar/NavBar";
import styles from "./styles.module.css";

const Checkout = () => {
    return (
        <>
            <NavBar />
            <p className={styles.checkout}>Thanks for your patronage!</p>
        </>
    );
};

export default Checkout;
