import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <p>404 error! Probably</p>
            <p>This page will return an actual error later</p>
            <Link to="/">For now though, have a link back home</Link>
        </>
    );
};

export default ErrorPage;
