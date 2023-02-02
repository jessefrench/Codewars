// Count the Number of Cubes with Paint On

// DESCRIPTION:
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times. Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// EXAMPLES:
// countSquares(2) --> 26
// countSquares(4) --> 98

// SOLUTION:
const countSquares = cuts => cuts === 0 ? 1 : (6 * cuts ** 2) + 2