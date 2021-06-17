import { render, screen } from "@testing-library/react";
import { Card } from "../components";
import { MOVIE_FIXTURE } from "./fixtures/movie";

describe("Card", () => {
  it("renders movie name", () => {
    render(<Card {...MOVIE_FIXTURE} />);
    expect(screen.getByText(MOVIE_FIXTURE.title)).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<Card {...MOVIE_FIXTURE} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders movie rating", () => {
    render(<Card {...MOVIE_FIXTURE} />);
    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText(MOVIE_FIXTURE.rating)).toBeInTheDocument();
  });

  it("renders movie description", () => {
    render(<Card {...MOVIE_FIXTURE} />);
    expect(screen.getByText(MOVIE_FIXTURE.desc)).toBeInTheDocument();
  });
});
