// Surface Area and Volume of a Box

// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

// SOLUTION:
function getSize(width, height, depth){
    const area = (depth * width + depth * height + width * height) * 2
    const volume = width * height * depth
    return [area, volume] 
}