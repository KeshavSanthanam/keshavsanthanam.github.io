---
layout: post
title: Minimum Number of Operations to Move All Balls to Each Box
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

## Testcases
Input: boxes = "110"

Output: [1,1,3]

## Initial Result
Time spent: --

Pass. I made an inefficient but straightforward and clean O(n^2) time and O(n^2) space solution (which I quickly made into an O(n) space solution). 

## Initial Approach

I maintained a matrix of all the distance multipliers (i.e. ```[0,1,2]```, ```[1,0,1]```, etc), which I later replaced with just performing the arithmetic between center and current indices in-place. This solution still loops the range of boxes twice to calculate the sums at each index, which makes my final solution run in O(n^2) time. 

## What I Missed
We can use a prefix and postfix sum within the same array, and return that result. 

## Approach to the Solution
The distances from the left end of the array to a given point can be found as ```distances[i] = prefix_count * i - prefix_sum```. From the right side, we add the opposite: ```distances[i] = prefix_sum - prefix_count * i```. The logic is that ```prefix_count * i``` tells us the cost if all nodes were sitting right at the current index. The ```prefix_sum``` allows us to mitigate the overcounting of these values. 

Given the above, we populate distances on the leftward pass and then add on top of it for the rightward pass. 

## Key Takeaways
Practice prefix sum/product problems. 