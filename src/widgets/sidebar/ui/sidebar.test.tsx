import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { ReactNode } from "react";

jest.mock("react-router-dom", () => ({
  Link: ({ children }: { children: ReactNode }) => <a href={""}>{children}</a>, // Mock Link to render as a span
}));

describe("Sidebar", () => {
  test("with only first param", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
