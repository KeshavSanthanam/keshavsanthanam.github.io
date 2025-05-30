---
layout: post
title: Median of Two Sorted Arrays
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

## Testcases
Input: nums1 = [1,2], nums2 = [3,4]

Output: 2.50000

## Initial Result
Time spent: --

Fail. My original idea was to find the insertion index in array 2 of the median of array 1 and vice versa. Taking the median of the resulting array seems correct on small testcases but does not provide the final solution. 

## Initial Approach
Find the median indices of each array and use these to partition the opposite array. This resulted in separate values (for small arrays like the simple testcases provided) that I took the median of to get a resulting value.

## What I Missed
Though I guessed binary search would be necessary, I didn't see how to implement it to "virtually sort" two arrays by maintaining indices showing where they overlap. 

## Approach to the Solution

**We use the smaller of the two arrays to determine the movement of our partitions.** It is also the only array we perform binary search on, so ```left``` and ```right``` refer to the pointers in the smaller array. We can calculate partition indices as follows:

- ```partition1 = (left + right)//2```
- ```total of the two partitions = (len(small) + len(big) + 1)//2```
- Therefore, ```partition2 = total - (left + right)//2```. 

We can verify if these partitions are correct because if they are, then ```max_small1 <= min_big2``` and ```max_small2 <= min_big1```. 

If they are not correct partitions, we want to change the ```left``` and ```right``` pointers. If the violation is that ```max_small1 > min_big2```, then we know that we should move ```partition1``` to the left and otherwise to the right. This means we should set ```right = partition1 - 1``` or ```left = partition1 + 1``` respectively. Note: if we partition an array such that one partition contains no elements, we set the corresponding max/min values to positive/negative infinity to satisfy our ```if``` statement. 

Once we find successful partitions, we can return based on the lengths of each array:

- if the total length of the two arrays is even, return the max of the two maximums averaged with the min of the two minimums. 
- if the total length of the two arrays is odd, return the max of the two maximums alone.  

## Key Takeaways
Practice more weird binary search problems. 
