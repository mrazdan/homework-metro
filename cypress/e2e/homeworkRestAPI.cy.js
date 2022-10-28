describe('Homework RestAPI', () => {
  
  it('retrieves all employees and counts the number of employees with age number higher than 30', () => {
    cy.request('https://dummy.restapiexample.com/api/v1/employees').then((resp) => {
      expect(resp.status).to.eq(200)
      let employees_over_30 = 0;
      for (let employee = 0; employee < resp.body.data.length; employee++) {
        if(resp.body.data[employee].employee_age > 30){
          employees_over_30++;
        }
      }
      cy.log(employees_over_30)
    })
  })

  it('adds a new employee with age higher than 30 and asserts that operation is successful', () => {
    cy.request('POST', 'https://dummy.restapiexample.com/api/v1/create',
     {
      "id":25,
      "employee_name":"Daniel Mraz",
      "employee_salary":1500,
      "employee_age":32,
      "profile_image":""
   })
    .then((resp) => {
      expect(resp.body.data).to.have.property('employee_name', 'Daniel Mraz')
    })
  })

  it('updates the employee and asserts that operation is successful', () => {
    cy.request('PUT', 'https://dummy.restapiexample.com/api/v1/update/25', {"employee_salary":"1800"})
    .then((resp) => {
      expect(resp.body.data).to.have.property('employee_salary', 1800)
    })
  })


  it('retrieves all employees and counts the number of employees with age number higher than 30', () => {
    cy.request('https://dummy.restapiexample.com/api/v1/employees').then((resp) => {
      expect(resp.status).to.eq(200)
      let employees_over_30 = 0;
      for (let employee = 0; employee < resp.body.data.length; employee++) {
        if(resp.body.data[employee].employee_age > 30){
          employees_over_30++;
        }
      }
      cy.log(employees_over_30)
    })
  })

  it.only('deletes the employee that was added and asserts the operation is successful', () => {
    cy.request('DELETE', 'https://dummy.restapiexample.com/api/v1/delete/25')
    .then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })

})


