---
layout: post
title: Path Sum 3
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

## Testcases

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

## Initial Result
Time spent: --

I used prefix sums, which is great. Unfortunately, I forgot to account for multiple instances of the same sum (so I should use a dictionary). 

## Initial Approach

I used DFS with a set for the prefix_sums. I also passed the set in unnecessarily. 

## What I Missed
Prefix sums can appear multiple times. Also, a default case should be established (0:1). 

## Approach to the Solution

Use a dictionary and return count. Establish count's initial values (from the dictionary) **before** updating the dictionary with the new total. This annoying part helps handle the edge case of single-node trees. Then, increment count with the BFS calls, and reset the changes to the dictionary. 

## Key Takeaways

Practice DFS and the Path Sum series. 
