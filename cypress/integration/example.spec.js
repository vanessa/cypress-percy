describe("My Application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("renders title and button", () => {
    cy.get("[data-test=title]").should("have.text", "Hello, world!");
    cy.get("[data-test=button]")
      .should("have.class", "btn")
      .and("have.text", "Click");
    cy.percySnapshot();
  });

  it("has green button on iPhone 6", () => {
    cy.viewport("iphone-6");
    cy.percySnapshot();
  });
});
