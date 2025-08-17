import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/NavBar/NavBar";
import routes from "../routes";

describe("NavBar", () => {
    it("has links to other places", () => {
        const Stub = createRoutesStub([
            {
                path: "/",
                Component: NavBar,
            },
        ]);

        render(<Stub />);

        const nav = screen.getByRole("navigation");

        expect(nav).toHaveTextContent(/Home/i);
        expect(nav).toHaveTextContent(/Store/i);
        expect(nav).toHaveTextContent(/Checkout/i);
    });
    it("navigates to home", async () => {
        const user = userEvent.setup();
        const Stub = createRoutesStub([
            {
                path: "/navbar",
                Component: NavBar,
            },
            ...routes,
        ]);

        render(<Stub initialEntries={["/navbar"]} />);
        await user.click(screen.getByText(/home/i));

        expect(screen.getByText(/welcome/i)).toBeTruthy();
    });
    it("navigates to store", async () => {
        const user = userEvent.setup();
        const Stub = createRoutesStub([
            {
                path: "/navbar",
                Component: NavBar,
            },
            ...routes,
        ]);

        render(<Stub initialEntries={["/navbar"]} />);
        await user.click(screen.getByText(/store/i));

        expect(screen.getByText(/this is the store/i)).toBeTruthy();
    });
    it("navigates to checkout", async () => {
        const user = userEvent.setup();
        const Stub = createRoutesStub([
            {
                path: "/navbar",
                Component: NavBar,
            },
            ...routes,
        ]);

        render(<Stub initialEntries={["/navbar"]} />);
        await user.click(screen.getByText(/checkout/i));

        expect(screen.getByText(/checkout page/i)).toBeTruthy();
    });
});
