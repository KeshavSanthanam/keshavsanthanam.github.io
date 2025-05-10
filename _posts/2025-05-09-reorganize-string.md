---
layout: post
title: Reorganize String
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

## Testcases

### Example 1:

Input: s = "aab"

Output: "aba"

### Example 2:

Input: s = "aaab"

Output: ""

## Initial Result
Time spent: 35 min

Pass. I needed a hint about "heaps" to motivate me to explore a previous idea regarding the hashmap I was examining. 

## Initial Approach

I tried to backtrack it and that causes a TLE, and it isn't clear to me how to speed this up. 

## What I Missed

I should have written out more ideas about how to use a hashmap. This would lead to my solution without the need of a hint. It would also lead to a quicker solution without making the mistake of adding back to the front of our substrings list every time. 

## Approach to the Solution
Collect character counts using Counter (or manually). Push these into a max-heap with their corresponding characters (flipping signs to fulfill the maximum condition). Use the first (max) key-value pair to make substrings in a list. This count determines the maximum amount of substrings. From here, pop off the list, and add characters to the list iteratively. This is done until all characters are exhausted. After this, check if the final string contains no neighboring adjacent characters (if it still does, return ""). 

## Key Takeaways
Write out solutions for any generation-based problem for each potential solution type (hash maps in this case). 