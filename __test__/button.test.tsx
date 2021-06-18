import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../components";

describe("Button", () => {
  it("renders button and handle click event", () => {
    const handleClick = jest.fn();
    const buttonName = "testButton";
    render(<Button name={buttonName} onClick={handleClick} />);
    const button = screen.getByRole("button", { name: buttonName });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled();
  });
});
