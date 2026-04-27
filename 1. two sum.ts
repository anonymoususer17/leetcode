function twoSum(nums: number[], target: number): number[] {
    let firstNum = 0;
    let numToFind = 0;
    let firstNumIndex = 0;
    let numToFindIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        firstNum = nums[i];
        numToFindIndex = nums.findIndex( (num, index) => num == target - firstNum && index !== i);
        if (numToFindIndex !== -1) {
            firstNumIndex = i;
            return [firstNumIndex, numToFindIndex];
        }
    }

    return [];

};