---
layout: post
title: Largest Sum Of Averages
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given an integer array nums and an integer k. You can partition the array into at most k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each subarray.

Note that the partition must use every integer in nums, and that the score is not necessarily an integer.

Return the maximum score you can achieve of all the possible partitions. Answers within 10-6 of the actual answer will be accepted.

## Testcases
Input: nums = [9,1,2,3,9], k = 3

Output: 20.00000

## Initial Result
Time spent: --

Fail. TLE since I couldn't implement successful DP. 

## Initial Approach

I initially misunderstood the question and thought that I could select out of order. After fixing this misunderstanding, I defined k groups and assigned elements to each in order and then found the sum of averages for each case. This takes too long, and I didn't memoize this strategy (though it seems like it could be memoized, and would just be my final solution except bottom-up). 

## What I Missed

We can memoize array slicing by maintaining the index boundary (from only one side) and the remaining slices (a decreasing k) as state. 

## Approach to the Solution

Define a backtracking function that takes in a boundary (```len(nums)``` for example) and the remaining slices (```k``` initially). Handle edge cases:

- When k > n, return 0 to indicate a suboptimal subsolution (since slicing more is always superior - look up "mediant" (sic) for more information)

- When k == 1, we are at our final slice, so we can store in DP the average ```sum(nums[:n])/float(n)```, and return this result. 

For the main logic, we want to maintain a ```curr_sum``` starting at ```0```. We choose from all index boundaries (lower boundaries in my implementation) below the current value of ```n```, and add the index we are on to ```curr_sum```. In our loop, we should constantly compare to find the max value for ```dp[n, k]``` by comparing with ```curr_sum/float(n-i) + backtrack(i, k - 1)```. Then, we return the DP value. Return the results of backtrack for our final solution. 

## Key Takeaways
Practice recursive DP. 
