public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int total = nums.Length;

        for (int i = 1; i < total; i++)
        {
            if (nums[i] == nums[i - 1])
            {
                total--;
                for (int j = i; j <= total; j++)
                {
                    nums[j] = nums[j+1];
                }
                i--;
            }
        }
        return total;
    }
}