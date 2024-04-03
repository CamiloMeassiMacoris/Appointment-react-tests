import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

  it("renders the customer first name", () => {
    const customer = { firstName: "Rodolfo" };

    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Rodolfo");
  });

  it("renders another customrt fitst name", () => {
    const customer = { firstName: "Jaqueline" };

    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jaqueline");
  });
});
