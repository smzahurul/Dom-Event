//  When to use a function, function inside an array:
std = [22, 11, 44, 55, 10, 9, 8, 7]

function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ':' + 'Number is even ');
    } else {
        console.log(num * 2, ':' + 'Number is odd ');
    }
}
for (let i = 0; i < std.length; i++) {
    const element = std[i];
    evenify(element);
}

// function evenify_all(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num % 2 == 0) {
//             console.log(num, ':' + 'Number is even ');
//         } else {
//             console.log(num * 2, ':' + 'Number is odd ');
//         }

//     }
// }
// nums = [5, 6, 32, 58, 45, 22];
// evenify_all(nums);

// friends_age = [20, 16, 21, 15, 18, 17];
// evenify_all(friends_age);

// teacher_age = [35, 36, 45, 40, 42, 32, 30, 37];
// evenify_all(teacher_age);

// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     // console.log(age);
//     if (age % 2 == 0) {
//         console.log(age, ':' + 'is even number');
//     } else {
//         console.log(age * 2, ':' + ' is odd number');
//     }

// }