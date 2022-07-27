/** * @jest-environment jsdom */
import { checkForURL } from '../client/js/urlChecker';

describe ("Testing the submit functionality", () => {
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert
  test("Testing the url is not null", () => {
    const url = 'https://apnews.com/article/elon-musk-technology-a71c76ed753b144f4aee081df5ab707c';
    expect(checkForURL(url)).toBeTruthy();
  });
  test("Testing the url is null", () => {
    const url = 'adsfafdhadsf';
    expect(checkForURL(url)).toBeFalsy();
  });
});
