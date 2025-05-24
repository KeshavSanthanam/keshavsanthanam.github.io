---
layout: post
title: Ugly Number 2
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

## Testcases
Input: n = 10

Output: 12

Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

## Initial Result
Time spent: --

Fail. TLE on my only correct (but slow) solution. 

## Initial Approach
I tried to find all primes using the Sieve of Eratosthenes, and then I compared all primes except the first 3 with all candidate values. 

## What I Missed
Generating primes is not necessary. We can maintain the next multiples of 2, 3, and 5 that we expect to see by assigning those values to variables and increasing them whenever that same multiple is encountered. 

## Approach to the Solution
We can then tell if a number is ugly by making sure it is divisible by one of these 3 values/array pointers (this fact was confusing for me since I initially misunderstood the problem and also didn't initially connect that multiples of 2, 3, and 5 make up most integers). In order to choose ugly numbers in the correct order, we evaluate the following:

```
next_val = min(ugly_nums[i2] * 2, ugly_nums[i3] * 3, ugly_nums[i5] * 5)
ugly_nums.append(next_val)
```

We can then verify which pointer to increase by comparing our found value to the ones expected in each of the three cases:
```
if next_val == ugly_nums[i2] * 2: i2 += 1
if next_val == ugly_nums[i3] * 3: i3 += 1
if next_val == ugly_nums[i5] * 5: i5 += 1
```
## Key Takeaways
Practice math-y problems using dynamic programming.