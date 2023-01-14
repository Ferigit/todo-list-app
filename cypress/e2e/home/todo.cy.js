
/* eslint-disable no-undef */

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('test the to-do flow', () => {
    cy.get('#input').type('task one');
    cy.get('#submit-add').click();
    cy.get('#input').type('task two');
    cy.get('#submit-add').click();

    //click to done the task
    cy.contains('task one').click();
    cy.contains('task two').click();

    //click to undo the done status
    cy.contains('task one').click();

    //click undo btn
    cy.contains('Undo').click();

    //click redo btn
    cy.contains('Undo').click();



  })
  it('test view task delete', () => {
    cy.get('#input').type('task one');
    cy.get('#submit-add').click();

    //click to delete the task
    cy.get('#bin').click();
  })
  it('test view task detail', () => {
    cy.get('#input').type('task one');
    cy.get('#submit-add').click();

    //click to go to detail page
    cy.contains('Details').click();

    //click to go back to homepage 
    cy.get('#back-btn').click();

  })

})
