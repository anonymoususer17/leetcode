from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        total = len(nums)
        index = 0
        while index < total:
            if nums[index] == val:
                for i in range(index, total - 1):
                    nums[i] = nums[i + 1]
                total -= 1
            else:
                index += 1
        return total