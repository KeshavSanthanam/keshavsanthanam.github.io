---
layout: post
title: Strictly Palindromic Number
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.

## Testcases
### Example 1
Input: n = 9

Output: false

### Example 2
Input: n = 4

Output: false

## Initial Result
Time spent: 10 min

Pass. I got a slower solution from calculating all possible string representation in other bases and returning ```False``` when I encountered a violation of the palindromic property. 

## Initial Approach
Calculate the strings for lower bases and then return ```False``` if no longer palindromic. 

## What I Missed
No values 4 or higher are strictly palindromic. This pattern isn't hard to see if you consider the possibility. A base ```n-2``` is always represented as ```1 * x + 2 * y``` for integers x and y, violating the palindromic principle. 

## Approach to the Solution
```Return False``` (since our problem is bounded to have inputs at minimum 4). 

## Key Takeaways
Review obscure (but not too obscure) binary properties. 