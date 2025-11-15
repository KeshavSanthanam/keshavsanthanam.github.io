---
layout: post
title: Count Numbers With Unique Digits
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

## Testcases

### Example 1:

Input: n = 2

Output: 91

Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

### Example 2:

Input: n = 0

Output: 1

## Initial Result
Time spent: --

Fail. I had a time limit error due to expensive string conversions inside my recursive backtracking function. 

## Initial Approach

I used backtracking to parse a string version of each increasing integer and then used a list to set conversion to examine if any characters repeated. 

## What I Missed

We can pass an array and iteratively add each character to it (I like to call this pattern a "number builder"). This solution is slow but works and is easy to follow.

We can also use combinatorics by deducing our next value's options via elimination when viewing each digit one at a time. 

## Approach to the Solution

We can generate the array as detailed above. Be sure to exclude leading zeroes via a base case. 

There is a straightforward combinatorics solution to this one that can be detected without prior information. One edge case is that a single-digit number has 10 possibilities (the 0 is counted despite it leading the single-character string). Normally, any single leading digit has 9 possibilities, and the inclusion of 0 for the 2nd character means our next digit also has 9 possibilities. After that, we have gradually fewer (8, 7, 6, etc.). We can code this using a for loop and a changing multiplier constant. Be sure to handle both n = 0 and n = 1 edge cases beforehand. 

## Key Takeaways
Learn more combinatorics, and avoid type conversions during time-intensive recursion. 