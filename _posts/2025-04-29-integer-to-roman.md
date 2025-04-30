---
layout: post
title: Integer to Roman
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given an integer, convert it to a Roman numeral.

## Testcases

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)

Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

## Initial Result
Time spent: 16 minutes

Fail. Passed many cases (all local ones but not all Leetcode ones) eventually. 

## Initial Approach

I flipped the dictionary around that I used for "roman to integer", and then I added the "subtracted" entries (i.e. IX) by double-looping through the list of keys. This was a bit complicated to do right since I was sometimes building out a substring of multiple roman numerals as a single value. I recognized the core logic of greedily subtracting the largest numerals first and implemented it well. 

## What I Missed

I kept adding in the lower values like 4, 40, 90, etc. programmatically as opposed to hard-coding them in. You could still do them programmatically if you wanted, but it is smart to use a different data structure to manage entries and to generate in-order. 

## Approach to the Solution

Populate all roman numerals including the "subtracted" pairs. Greedily subtract the largest numerals first and combine numerals to form the final string. 

## Key Takeaways
Write out the state of your proposed data structure and dry run before coding to see if there is a more convenient structure or population strategy. 