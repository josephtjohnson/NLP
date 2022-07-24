/** * @jest-environment jsdom */
const handleSubmit = require('../client/js/formHandler')

describe ("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
})});
