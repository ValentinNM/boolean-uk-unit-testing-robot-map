const { printPosition } = require("../print");
const { main } = require('../index');

describe("The position of the robot", () => { 
    it("should be located at", () => { 

        const currentPosition = { x: 3, y: 6 }

        expect(printPosition(currentPosition)).toEqual(`Robot is at { x: ${currentPosition.x}, y: ${currentPosition.y} }`)
        // expect(printPosition(currentPosition)).toEqual(`Robot is at ${JSON.stringify(currentPosition, null, 2)}`)
    })
})