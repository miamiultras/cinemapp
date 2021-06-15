import { render, screen } from "@testing-library/react";
import { Layout } from "../components";

describe("Layout", () => {
  const content = "content";
  it("renders title", () => {
    render(<Layout>{content}</Layout>);
    expect(
      screen.getByRole("heading", { name: "Cinem app" })
    ).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<Layout>{content}</Layout>);
    expect(screen.getByText("Reserve tickets easier")).toBeInTheDocument();
  });

  it("renders content", () => {
    render(<Layout>{content}</Layout>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("renders back to home when not on home page", () => {
    render(<Layout>{content}</Layout>);
    expect(screen.getByText("← Back to home")).toBeInTheDocument();
  });

  it("doesn't render back to home when on home page", () => {
    render(<Layout home>{content}</Layout>);
    expect(screen.queryByText("← Back to home")).not.toBeInTheDocument();
  });
});
