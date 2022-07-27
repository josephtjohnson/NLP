import { handleSubmit } from '../client/js/formHandler';

describe("Testing handleSubmit is defined", () => {
    test("Testing the handleSubmit() function", () => {
        //const input = {}; // empty object mocking event object
        expect(handleSubmit).toBeDefined;
    })
});
