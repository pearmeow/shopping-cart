import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const NavBar = () => {
    return (
        <>
            <div className={styles.listContainer}>
                <nav className={styles.list}>
                    <Link to="/">Home</Link>
                    <Link to="/store">Store</Link>
                </nav>
            </div>
        </>
    );
};

export default NavBar;
