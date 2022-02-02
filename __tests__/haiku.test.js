import Haiku from "../src/haiku.js"

describe ('Haiku', () => {

  test('should construct Haiku object', () => {
    let haiku = new Haiku("text");
    expect(haiku.text).toEqual("text");
  });

  test('it should return false if not 3 lines', () => {
    const haiku = new Haiku("First Line\n Second line");
    expect(haiku.isThreeLines()).toEqual(false);
  })
});

/*
describe('Triangle', () => {
  let reusableTriangle;

  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableTriangle);
  });
});
*/