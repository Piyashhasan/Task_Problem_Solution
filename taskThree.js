function findTwoIndices(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 19;
const result = findTwoIndices(nums, target);

if (result !== null) {
  const [index1, index2] = result;
  console.log(`Indices: ${index1}, ${index2}`);
} else {
  console.log("No such indices found.");
}
