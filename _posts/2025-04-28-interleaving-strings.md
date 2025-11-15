---
layout: post
title: 
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

s = s1 + s2 + ... + sn

t = t1 + t2 + ... + tm

|n - m| <= 1

The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

## Testcases
Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"

Output: true

Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.

Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"

Output: false

Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

## Initial Result
Fail. One line short. I memoized my backtracking function shortly after the first run (which isn't ideal since implmenting all parts of the solution on the first try is essential for whiteboarding). I also did not consider any O(n) space solution (this one is O(m*n), just like the matrix solution). (I will explore the other solutions at the end.)

## Initial Approach
Time spent: 30 min.

I recognized that we need to try adding from the beginning of each candidate string. This is very simple but sometimes gives us two possible options (when both strings have the desired character for s3 as the next character available). I resolved this by backtracking on both cases and using "or" on both results. I then memoized all these results using my DP dictionary. 

## What I Missed
I didn't access the ```DP``` map when it would actually provide the speedup desired (before checking any cases). 

## Approach to the Solution
Check if the state has been handled by DP before evaluating the new scenario. 

### Matrix/Array Solutions
Similar to this, we could encode all i and j values as row and column indices of a matrix. This results in the same O(m\*n) space complexity and O(m\*n) time complexity. 

There is also a way to solve this with an array. When reviewing solutions, I heard this and began thinking of it myself but couldn't figure it out. After hearing it, it seems you modify the matrix solution to only contain one row of history that is replaced every outer loop.

### Matrix Fun
The matrix solution was more difficult than expected, so I'm due to review those. Similarly, there is some complicated logic around the 1-dimensional array. For a 2-D array, just remember to update values to True if and only if their neighbor is true and the corresponding characters match in the base strings; make sure to handle the edges at the beginning as well. For a 1-D array, ensure that the longer of the two strings forms your DP and serves to initialize it with initial values. Then, expand on it iteratively with matching cases in either the vertical or horizontal directions (iterating through both i and j). 

## Key Takeaways
Write out the stuff to "add later" when approaching a problem piece by piece. Explain (out loud ideally) the reasons why pieces of the code (like the unnecessary Counter objects early in this problem) are necessary (this would have shown that I do not need to compare relative character counts). 
