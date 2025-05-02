---
layout: post
title: Move Zeroes
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

## Testcases

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

## Initial Result
Time spent: 40 min

Passed with complicated O(n) time solution as opposed to the faster O(n) solution expected. 

## Initial Approach
Didn't read the problem fully and understand that sorting based on sentinel value substitution would solve a different problem but not this one. Then, I tried again with something similar to the right idea but missing the intution around moving the left pointer exactly 0 or 1 times each pass and the right pointer exactly once. 

## What I Missed
You are maintaining a window containing all nonzero elements before the left pointer. The right pointer can move continuously and the left pointer only needs to adjust leftward in the event of a swap (right pointer encounters a nonzero number). This way the two pointers track each other exactly before any swaps and otherwise trail at a constant distance. 

## Approach to the Solution
Maintain a left pointer and right pointer at start. Continuously iterate ```r``` and both 1. swap and 2. increment ```l``` when encountering a nonzero value. 

## Key Takeaways
This one is a weird trick, so it's more memorization-able than most, but it's still worth remembering to read the problem carefully and dry run your algorithm to simplify it later. 
