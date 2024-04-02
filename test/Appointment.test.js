import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Rodolfo" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");

    document.body.appendChild(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Rodolfo");
  });

  it("renders another customrt fitst name", () => {
    const customer = { firstName: "Jaqueline" };
    const component = <Appointment customer={customer} />;
    const containerTwo = document.createElement("div");

    document.body.appendChild(containerTwo);
    act(() => {
      ReactDOM.createRoot(containerTwo).render(component);
    });

    expect(document.body.textContent).toContain("Jaqueline");
  });
});
