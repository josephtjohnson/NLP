/** * @jest-environment jsdom */
const checkForURL = require('../client/js/urlChecker')

  test("Testing the url is not null", () => {
    const url = 'https://apnews.com/article/elon-musk-technology-a71c76ed753b144f4aee081df5ab707c';
    expect(checkForURL(url)).toBeTruthy();
  });
  test("Testing the url is null", () => {
    const url = '';
    expect(checkForURL(url)).toBeNull();
  });
  test("Testing the url is null", () => {
    const url = 'adsfafdhadsf';
    expect(checkForURL(url)).toBeFalsy();
  });
});
