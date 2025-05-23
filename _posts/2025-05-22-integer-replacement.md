---
layout: post
title: Integer Replacement
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given a positive integer n, you can apply one of the following operations:

If n is even, replace n with n / 2.

If n is odd, replace n with either n + 1 or n - 1.

Return the minimum number of operations needed for n to become 1.

## Testcases

Input: n = 7

Output: 4

Explanation: 7 -> 8 -> 4 -> 2 -> 1 or 7 -> 6 -> 3 -> 2 -> 1

## Initial Result
Time spent: 30 min

Pass with slow solution. 

## Initial Approach

I used backtracking while maintaining the number itself and the step count as state. I also made the function recursively return the number of steps. 

## What I Missed

If we look at odd numbers, we can find two subcases that allow us to decide to add or subtract 1 without backtracking. 

- If the binary representation of a number ends in 11, then turning it into 1 takes 2 steps if you subtract 1 (11 to 10 to 1). If you add 1 instead, it becomes 00 with 1 added to a prior term (i.e. 3 to 4), and this decision takes us two steps further from obtaining 1. 
- If the binary representation of a number ends in 01, then turning it into 1 takes 2 steps if we add 1 (01 to 10 to 1). If you subtract 1 instead, it becomes 00 and any further digits are still a distance of 2 from the decimal point. **If there were no prior digits, we wouldn't evaluate this case since 01 == 1.**

## Approach to the Solution

We can backtrack (recursively or with a loop). For each step, we can divide by 2 if the number is even or subtract 1 if the number equals 3 or ends in ```11``` otherwise; otherwise, we add 1. Keep a count of the number of steps and return when the number equals 1. 

## Key Takeaways
Practice some common bit manipulation (but for this one, really just practice evaluating properties of the last 2 bits). 
