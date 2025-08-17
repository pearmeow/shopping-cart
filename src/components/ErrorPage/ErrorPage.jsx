import NavBar from "../NavBar/NavBar";
import styles from "./styles.module.css";

const ErrorPage = () => {
    return (
        <>
            <NavBar />
            <p className={styles.error}>This page doesn't exist!</p>
            <p className={styles.error}>
                Click on Home or Store to go to a page that does.
            </p>
        </>
    );
};

export default ErrorPage;
