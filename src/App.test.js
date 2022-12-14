
import { render, screen } from "@testing-library/react";
import App from "./App";

it("should display the heading with the correct text", () => {
  render(<App />);
  const heading = screen.getByText(/Beer API/i);
  expect(heading).toBeInTheDocument();
});


