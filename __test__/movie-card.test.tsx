import { render, screen } from "@testing-library/react";
import { MovieCard } from "../components";
import { MOVIE_FIXTURE } from "./fixtures/movie";

describe("MovieCard", () => {
  it("renders movie name", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(screen.getByText(MOVIE_FIXTURE.title)).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders movie rating", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(screen.getByText(MOVIE_FIXTURE.rating)).toBeInTheDocument();
  });

  it("renders movie series", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(screen.getByText("Series")).toBeInTheDocument();
    expect(screen.getByText(MOVIE_FIXTURE.year)).toBeInTheDocument();
  });

  it("renders movie description", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(screen.getByText(MOVIE_FIXTURE.desc)).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<MovieCard {...MOVIE_FIXTURE} />);
    expect(
      screen.getByRole("button", { name: "Buy ticket" })
    ).toBeInTheDocument();
  });
});
