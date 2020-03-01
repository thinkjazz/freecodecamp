// function largestOfFour(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let maxOfNumbers = arr[i][0];
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] >= maxOfNumbers) {
//                  maxOfNumbers = arr[i][j];
//             }
//         }
//         result.push(maxOfNumbers);
//     }
//     return console.log(result);
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
function largestOfFour(arr) {

    return arr.map((subArr) => Math.max.apply(null, subArr));

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
