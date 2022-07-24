/** * @jest-environment jsdom */
const checkForURL = require('../client/js/urlChecker')

describe ("Testing the url check functionality", () => {
  test("Testing the checkForURL() function", () => {
    expect(checkForURL).toBeDefined();
  });
  test("Testing the url is not null", () => {
    const url = 'https://apnews.com/article/elon-musk-technology-a71c76ed753b144f4aee081df5ab707c';
    expect(urlChecker(url)).toBeTruthy();
  });
  test("Testing the url is null", () => {
    const url = '';
    expect(urlChecker(url)).toBeNull();
  });
  test("Testing the url is null", () => {
    const url = 'adsfafdhadsf';
    expect(urlChecker(url)).toBeFalsy();
  });
});
