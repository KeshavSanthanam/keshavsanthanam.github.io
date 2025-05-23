---
layout: post
title: Maximum Length of Pair Chain
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.

## Testcases

Input: pairs = [[1,2],[2,3],[3,4]]

Output: 2

Explanation: The longest chain is [1,2] -> [3,4].

## Initial Result
Time spent: 20 min

Pass. I had some unneeded data structure manipulation confusion so I spent time debugging. 

## Initial Approach
My goal is to solve the subproblem of "what's the best solution if my list ended here?" for each of the members of pairs. I sorted the pairs by their leading values. This ensures that all potential predecessors are available to be chosen by each end index. Then, I iterated end index to be all but the first element. In the inner loop, I looped through all elements before the end index and ensured the following:

- The end of the leading pair is before the beginning of the ending pair
- 1 + the length stored in DP for the leading pair exceeds the length currently stored at DP's end index

In my initial approach, I stored both the prior last value and the length in DP. 

## What I Missed

We can access the last value of any pair directly using pairs. Therefore, DP can store our lengths exclusively. 

## Approach to the Solution

Perform the initial approach but find the last value in any pair using ````pairs```.

## Key Takeaways
Practice knapsack DP. 
