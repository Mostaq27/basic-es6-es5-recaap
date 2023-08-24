const max = Math.max(6,23, 45,1,89,23)
const numbers = [ 3, 5, 2, 45, 5, 43, 90,32, 15];
const arrayMax = Math.max(...numbers);
console.log(...numbers)
console.log(arrayMax)


// use spreed operator to copy
const nums = [4, 5, 87, 9];
const nums2 = nums;
// nums2.push(12);
const nums3 =[...nums] //copy
console.log(nums3);
nums.push(100)
console.log(nums3)
console.log(nums)
// advanced
const nums4 =[...nums,999] //add extra elements while copy
console.log(nums4)


