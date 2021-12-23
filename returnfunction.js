// When to return from a function and from where:

// function evenify(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num % 2 == 0) {
//             console.log(num, ':' + 'is even number');
//         } else {
//             console.log(num * 2, ':' + ' is odd number');
//         }

//     }
// }

function evenify(nums) {
    if (nums % 2 == 0) {
        return nums;
    } else {
        return nums * 2;
    }

}

function evenify(nums) {
    let result;
    if (nums % 2 == 0) {
        result = nums;
    } else {
        result = nums * 2;
    }
    return result;

}
let result1 = evenify(13);
let square = result1 * result1
console.log('Result:', square);

function evenify_all(nums) {
    let even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = evenify(num);
        even_array.push(result);

    }
    return even_array;
}
var num1 = [12, 14, 15, 26, 11, 12, 18, 17];
var zahurul = evenify_all(num1);
console.log(zahurul);