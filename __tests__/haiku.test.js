import Haiku from "../src/haiku.js"
 
describe ('Haiku', () => {

  test('should construct Haiku object', () => {
    let haiku = new Haiku("text");
    expect(haiku.text).toEqual("text");
  });
});