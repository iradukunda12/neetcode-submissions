class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seenNumbers: number[] = []; 
        // I need to loop through the array check if we have numbers that appear twice in the array
        for(let i = 0; i < nums.length; i++) {
            let currentNumber = nums[i];
            // if I find that number in the array that i appear twice I return true.
            if(seenNumbers.includes(currentNumber)) {
                return true;
            }

            seenNumbers.push(currentNumber);

        }
        
        // if not or there isn't that number that appear twice I return false 
        return false;
    }
}
