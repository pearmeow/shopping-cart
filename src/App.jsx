import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import styles from "./styles.module.css";

function App() {
    return (
        <>
            <NavBar />
            <h1 className={styles.header1}>
                Welcome to InsertStoreBrandNameHere
            </h1>
            <h2 className={styles.header2}>Yes, that's actually our name</h2>
            <h3 className={styles.header3}>
                <Link to="/store">Visit our store and buy something now!</Link>
            </h3>
        </>
    );
}

export default App;
