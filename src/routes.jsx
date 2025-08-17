import Store from "./components/Store/Store";
import App from "./App";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/store",
        element: <Store />,
    },
];

export default routes;
