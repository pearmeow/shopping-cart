import Store from "./components/Store/Store";
import Item from "./components/Item/Item";
import Checkout from "./components/Checkout/Checkout";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
    },
    {
        path: "/store",
        Component: Store,
    },
    {
        path: "/checkout",
        Component: Checkout,
    },
];

export default routes;
