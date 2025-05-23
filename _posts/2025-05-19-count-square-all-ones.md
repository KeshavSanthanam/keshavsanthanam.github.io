---
layout: post
title: Count Square Submatrices with All Ones
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

## Testcases

## Initial Result
Time spent: 15 min

Pass with inefficient O(n^4) time complexity solution. 

## Initial Approach

I saw that I can calculate the matrices of n x n dimension easily with a list of lists, so I made one of size 1 and traversed the whole matrix looking for it. Then, I did the same for size 2 and so on. I then slightly altered this solution to check for size 2 after finding a size 1 match at a specific index. This removed the need to traverse the matrix more than once (though the expensive comparisons of each submatrix to each 1's matrix remained). 

## What I Missed

The matrix itself can be used to store the number of squares formed with each newly discovered matrix value. 

## Approach to the Solution

Populate a DP matrix with the same dimensions as your input. Copy into DP the first row and column of your matrix. For each remaining index, the value stored should be 1 (due to matching the new 1 x 1 matrix) + the minimum of the 3 neighbors above, to the left, and diagonally up-and-to-the-left. This formula is clear when you see that neighbors of 1, 2, 2 allow us to match the n=1 and n=2 cases but not n=3. Therefore, our DP entry is 2 in this case. Finally, summate all of DP for your answer. 

## Key Takeaways
Practice more 2-D dynamic programming, and look to use the given structure when observing a greater than O(n^2) solution. 