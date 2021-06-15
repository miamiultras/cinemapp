import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Cinem app" })
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<App />);
    expect(screen.getByText("Reserve tickets easier")).toBeInTheDocument();
  });
});
