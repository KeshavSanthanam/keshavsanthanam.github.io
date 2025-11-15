---
layout: post
title: Longest Unequal Adjacent Groups Subsequence II
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem (shortened)

You need to select the longest subsequence from an array of indices [0, 1, ..., n - 1], such that for the subsequence denoted as [i0, i1, ..., ik-1] having length k, the following holds:

- For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.

- words[ij] and words[ij+1] are equal in length, and the hamming distance between them is 1, where 0 < j + 1 < k, for all indices in the subsequence.

Return a string array containing the words corresponding to the indices (in order) in the selected subsequence. If there are multiple answers, return any of them.

## Testcases
Input: words = ["bab","dab","cab"], groups = [1,2,2]

Output: ["bab","cab"]


## Initial Result
Time spent: --

Fail. Time limit error. 

## Initial Approach

I initially backtracked to try including or excluding each element dependent on if it worked with the previous index added or not. 

## What I Missed

If we find the **optimal solution for every given stopping index**, we create optimal solutions to each subproblem. By keeping track of the paths and total lengths of each optimal subsolution, we can solve in O(n^2) time using 1-D dynamic programming (though the paths require that our array takes O(n^2) space). 

## Approach to the Solution

Define a function to determine if any two indices can be neighbors (or not) based on their groups, lengths, and hamming distance. Create an array to store the paths for each optimal solution with each subproblem ending at a different index, beginning with the first. That gives us a base case of length 1 for a path ```[0]```. Then, evaluate all potential elements up until index 1 and add 1 to the longest to find the new longest path. Do the same for each index until the end of the array. Return the words for each index in the longest path found in the DP array (not necessarily including the beginning, end, or any other specific element). 

## Key Takeaways
Practice dynamic programming. 