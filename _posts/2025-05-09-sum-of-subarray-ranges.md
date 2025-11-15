---
layout: post
title: Sum of Subarray Ranges
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

## Testcases
### Example 1:

Input: nums = [1,2,3]

Output: 4

Explanation: The 6 subarrays of nums are the following:

[1], range = largest - smallest = 1 - 1 = 0 

[2], range = 2 - 2 = 0

[3], range = 3 - 3 = 0

[1,2], range = 2 - 1 = 1

[2,3], range = 3 - 2 = 1

[1,2,3], range = 3 - 1 = 2

So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
### Example 2:

Input: nums = [1,3,3]

Output: 4

Explanation: The 6 subarrays of nums are the following:

[1], range = largest - smallest = 1 - 1 = 0

[3], range = 3 - 3 = 0

[3], range = 3 - 3 = 0

[1,3], range = 3 - 1 = 2

[3,3], range = 3 - 3 = 0

[1,3,3], range = 3 - 1 = 2

So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.

### Example 3:

Input: nums = [4,-2,-3,4,1]

Output: 59

Explanation: The sum of all subarray ranges of nums is 59.

## Initial Result
Time spent: ~15 min

Fail. Did not attempt O(n^2) solution even though I knew it (I should have attempted it either way). 

## Initial Approach

Maintain start and end pointers at each of the ```n``` locations in the list and keep track of min and max as you expand from one pointer to the next in the nested loop. 

## What I Missed
You can solve this in O(n) using a stack if you get creative about padding the ends of the list as well as collecting indices of extrema monotonically. 

## Approach to the Solution
Pad the array with negative infinity values and then traverse the list. Add each index to a stack with a ```while``` condition beforehand to check if the last array index represents a value greater than the current one. If so, we have a "step down", and we can examine the most recent element in our increasing segment (the indices in our monotonically increasing stack). We can determine the minimum value by examining the value at the index stored at the top of the stack. Then, we need to account for the number of possible choices for left and right endpoints. These are seen as the distance between the first element removed from the stack and the second seen right behind it (the left choices) and the distance between our current element and what we removed from the top of the stack (the right choices). **We then subtract all these combinations from our output because these indicate the unique minimums.** We do the same in reverse for the opposite direction since we want to **add all unique maximums**. This gives you the total sum of the subarray ranges (since each range is a unique minimum subtracted from a unique maximum). 

## Key Takeaways
Practice monotonic stack problems to know when to use them (as opposed to just how to use them). 

