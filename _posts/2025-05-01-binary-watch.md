---
layout: post
title: Binary Watch
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".

Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".

The minute must consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".

## Testcases
Example 1:

Input: turnedOn = 1

Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Example 2:

Input: turnedOn = 9

Output: []

## Initial Result
Time spent: 35 min

Fail due to TLE on one final testcase (turnedOn = 10). 

## Initial Approach
I already was spoiled about the question category (saw it on a backtracking list). This made me think of how I can try all combinations of hours and minutes in conjunction and check for duplicates to avoid them. I was thinking a lot about Permutations and how a for loop can give me the opportunity to add elements in an arbitrary order, and I can avoid duplicate indices using a set. I was able to implement these parts successfully, but it wasn't fast enough even when minimizing the recursive state to just the lists of hours and minutes and the (necessary element) count. 

## What I Missed
The problem talks all about binary numbers, and I didn't think hard enough about how binary properties can be used to narrow down the possible solutions. Additionally, the solution set is small itself, so we can brute force through it and not form our values by summating the squares of 2 provided. 

## Approach to the Solution
Run through all achievable end state combinations (hours 0 through 11, minutes 0 through 59) and check if the sum of the number of bits used to represent these numbers (as each positive integer has exactly one binary representation) equals the limit specified. If so, format and add to the output list. 

## Key Takeaways
Memorize some bit manipulation strategies (especially beyond the NC 150). Memorize string, list, and other essential data structure functions that are built-in (in this case, the use of ```count(substring)``` simplifies our comparison logic). 