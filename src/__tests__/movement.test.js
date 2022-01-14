const { moveLeft } = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {

    it("should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 4, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 0, y: 5 });
    });
  });

  describe("The move right function", () => { 
    it("should move the 🤖 to the right", () => {
      const currentPosition = { x: 3, y: 5 };

      const finalPosition = { x: 4, y: 5 };
      expect(moveRight(currentPosition)).toEqual(finalPosition)
    })

    it("should not cross the boundaries", () => { 
      const currentPosition = { x: 9, y: 5 };

      const finalPosition = { x: 9, y: 5 }
      expect(moveRight(currentPosition)).toEqual(finalPosition)
    })
  })

  describe("The move up function", () => {
    it("should move the robot up", () => { 
      const currentPosition = { x: 5 , y: 4 };
      const finalPosition = { x: 5 , y: 5 };

      expect(moveUp(currentPosition)).toEqual(finalPosition)
    })

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5 , y: 9};
      const finalPosition = { x: 5 , y: 9};

      expect(moveUp(currentPosition)).toEqual(moveUp(finalPosition))
    })
  })
});
