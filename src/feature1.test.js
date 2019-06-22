import { registerName } from "./feature1";

describe('Feature 1', () => {
  it('should register a name', () => {
    expect(registerName({})).toEqual("Voldemort");
  });
});
