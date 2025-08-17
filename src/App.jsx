import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./styles/App.css";

function App() {
    return (
        <>
            <NavBar />
            <h1>Welcome to InsertStoreBrandNameHere</h1>
            <h2>
                <Link to="/store">Visit our store and buy something now!</Link>
            </h2>
        </>
    );
}

export default App;
