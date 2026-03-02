import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "@/app/components/Card";

describe("Card Component", () => {
  const mockMovie = {
    id: 1,
    title: "Test Movie",
    description: "Test Description",
    image: "/test.jpg",
    genre: "action",
    year: 2023,
    director: "Test Director",
  };

  test("renders movie title", () => {
    render(<Card movie={mockMovie} index={0} />);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
  });

  test("renders movie description", () => {
    render(<Card movie={mockMovie} index={0} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("renders movie genre", () => {
    render(<Card movie={mockMovie} index={0} />);
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
});
