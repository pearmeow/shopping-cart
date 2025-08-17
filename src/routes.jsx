import Store from "./components/Store/Store";
import Item from "./components/Item/Item";
import Checkout from "./components/Checkout/Checkout";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/store",
        children: [
            { index: true, Component: Store },
            { path: ":itemId", Component: Item },
        ],
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
];

export default routes;
