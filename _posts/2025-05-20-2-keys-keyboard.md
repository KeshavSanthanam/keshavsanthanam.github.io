---
layout: post
title: 2 Keys Keyboard
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).

Paste: You can paste the characters which are copied last time.
Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

## Testcases

Input: n = 3

Output: 3

Explanation: Initially, we have one character 'A'.

In step 1, we use Copy All operation.

In step 2, we use Paste operation to get 'AA'.

In step 3, we use Paste operation to get 'AAA'.


## Initial Result
Time spent: 30 min

Pass with slower but still acceptable backtracking with pruning. 

## Initial Approach

I performed backtracking and faced a TLE. I purposely failed cases and wrote custom testcases so I could trace cases of n = 20, 30, and 40 by hand. This allowed me to investigate opportunities to prune:

- If clipboard is nonzero and either 1. the total is not divisible by clipboard or 2. the remaining amount is not divisible by clipboard, prune this call
- **(Most importantly)** If the last call was to update the addend, this call must be to add to the sum instead

## What I Missed

There are dynamic programming solutions that allow us to minimize the recursive stack and get away with pruning less. 

## Approach to the Solution

Our state should be the count of A's on screen and the clipboard. Our cases are as follows (in each case, we memoize the result before returning):

- if exceeding n, return ```float('inf')```.
- if less than n, we choose between updating our addend (and the immediate step afterwards) or using it. This leads to the following 2 recurrence relations: ```1 + backtrack(curr_num + clipboard, clipboard)``` and ```2 + backtrack(curr_num*2, curr_num)```. 
- if we reach n, return 0 (base case to be added to prefixes from up the call stack). 

## Key Takeaways
Practice simulation-style DP like this (and writing out the recurrence relations). 