import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ numItems, price = 0 }) => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

NavBar.propTypes = {
    item: PropTypes.number,
};

export default NavBar;
