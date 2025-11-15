---
layout: post
title: Unique Paths II
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

## Testcases
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]

Output: 2

Explanation: There is one obstacle in the middle of the 3x3 grid above.

There are two ways to reach the bottom-right corner:

1. Right -> Right -> Down -> Down

2. Down -> Down -> Right -> Right

## Initial Result
Time spent: 26 min

Pass. I spent a while trying to handle the testcases of invalid paths on the initial row/column. 

## Initial Approach

I did the same DP "corner summation" as in Unique Paths and other 2-D DP problems. I marked invalid grid cells with a number 0 (for 0 possible paths). 

## What I Missed

We shouldn't consider 0 length paths at all, so we can use a sentinel value like None or float('-inf') **in the grid we are making** to prevent including those paths entirely. We should do the same for the first row and first column. 

## Approach to the Solution
There is one path to the first cell. The same is true for the first row's cells and first column's cells, assuming we don't see any obstacles. We can corner summate anytime we don't have an obstacle. In the event of maneuvering near an obstacle, we need to not include that path by setting our current cell to the sentinel (if we must include cells containing obstacles).  

## Key Takeaways
Draw out grid-based problems and dry run edge cases (like single-dimensional grids in this case). 
