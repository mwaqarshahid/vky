import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./pages/Header";
import Resume from "./pages/Resume";

describe("Waqar's portfolio website", () => {
  it("should display website name", () => {
    render(<App />);
    const element = screen.getByTestId("myname");
    expect(element).toHaveTextContent(/Waqar Shahid/i);
  });
  it("should display Waqar's display picture", () => {
    render(<Header />);
    const element = screen.getByAltText(/Waqar Shahid display pic/i);
    expect(element).toBeInTheDocument();
  });
  it("should display resume download button", () => {
    render(<Resume />);
    const button = screen.getByRole("button", { name: /Download Resume/i });
    expect(button).toBeInTheDocument();
  });
});
