from functools import reduce

class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if (len(nums) == 1):
            return nums[0]

        currentMaxProduct = float('-inf')
        for currentIndex in range (0, len(nums)):
            if (nums[currentIndex] == 0):
                    continue
            for window in range (currentIndex + 1, len(nums)+1):
                localMaxProduct = reduce(lambda x, y : x * y, nums[currentIndex : window])
                print(localMaxProduct)
                currentMaxProduct = max(currentMaxProduct, localMaxProduct)
        
        return currentMaxProduct