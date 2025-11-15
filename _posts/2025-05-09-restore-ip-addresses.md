---
layout: post
title: Restore IP Addresses
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

## Testcases
### Example 1:

Input: s = "25525511135"

Output: ["255.255.11.135","255.255.111.35"]

### Example 2:

Input: s = "0000"

Output: ["0.0.0.0"]

### Example 3:

Input: s = "101023"

Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

## Initial Result
Time spent: ~25 min

Pass with a slower and higher-memory solution. 

## Initial Approach
I thought out loud about dynamic programming and how it would be used, but it's actually not helpful for this problem. I knew to begin with recursive backtracking, so I implemented that successfully. 

## What I Missed
Dynamic programming is useful when we have subproblems that reoccur within a larger problem. A classic example is in generating fibonacci numbers. When we want to find the 7th fibonacci number, we find 13 = 5 + 8 (the 5th and 6th fibonacci numbers). Generating each of those can take time, so we store prior results as we solve for the nth fibonacci number. Each step of this problem demands the answers to many different subproblems, so some entries like the 2nd and 3rd fibonacci numbers are repeatedly used. 

In our current problem, once we have observed a number of different characters, we do not have any interest in what happens if we end up in the same state again from a different set of inputs. Not only do we code our problem such that this can't happen, we wouldn't benefit from this anyways due to the small solution space of our problem (we are just experimenting with placing 3 dividers). 

I also added a visited set when first designing my solution, but I should've paused and asked myself why it seemed necessary (it was due to python's subscript notation and the fact that I was going out of bounds on the input string and therefore adding duplicates to my solution). 

## Approach to the Solution
Backtrack by taking steps of size 1 to 3, adding the new segment to the candidates list parameter. When we have 4 elements and sufficient total characters, we can terminate and append to our output. 

## Key Takeaways
Review dynamic programming usecases for improving efficiency. 