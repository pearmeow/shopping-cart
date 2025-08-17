import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import routes from "../routes";
import App from "../App";

describe("App", () => {
    it("has another link to the store in a header", () => {
        const Stub = createRoutesStub(routes);

        render(<Stub />);

        expect(screen.getAllByRole("heading")[1]).toHaveTextContent(
            /visit our store/i,
        );
    });
    it("goes to store upon clicking big link", async () => {
        const user = userEvent.setup();
        const Stub = createRoutesStub(routes);

        render(<Stub />);

        await user.click(screen.getByText(/visit our store/i));

        expect(screen.getByText(/the store/i)).toBeTruthy();
    });
});
