describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of running total after button press', () => {
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '45')
    })
    
  it('should update display of running total after operation', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20');
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number7').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
    })

  it('should work with positive numbers as output', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
    })
 
  it('should work with negative numbers as output', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  })

    
  it('should work with decimal numbers as output ', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.5');
  })

  
  it('should work with very large numbers ', () => {
    cy.get('#number4').click();
    cy.get('#number7').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '139535');
  })
  
  it('should return Infinity when divided by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity');
  })



})