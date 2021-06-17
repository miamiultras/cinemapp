import { render, screen } from "@testing-library/react";
import App from "../pages/index";
import { MOVIE_FIXTURE } from "./fixtures/movie";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App moviesData={[MOVIE_FIXTURE]} />);
    expect(
      screen.getByRole("heading", { name: "Cinem app" })
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<App moviesData={[MOVIE_FIXTURE]} />);
    expect(screen.getByText("Reserve tickets easier")).toBeInTheDocument();
  });
});
