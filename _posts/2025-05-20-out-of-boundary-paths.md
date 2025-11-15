---
layout: post
title: Out Of Boundary Paths
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

## Testcases

Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0

Output: 6

## Initial Result
Time spent: --

Fail. I got a time limit error due to backtracking without fully implementing DP. 

## Initial Approach

I backtracked by maintaining the current position and remaining moves as state. I then tried each of the 4 directions and incremented the global count when out-of-bounds. 

## What I Missed
We should memoize the state with a dictionary. Also, we can memoize all locations in the matrix and **include the moves remaining in the memo** (3D DP). 

## Approach to the Solution

We populate 0s when we never reach the end (run out of moves) and 1s when we go out-of-bounds. We have the standard check for referencing DP if we encounter a repeating state. Since we store 1 for each successful case and 0 for unsuccessful cases, we can summate all the backtrack calls adjacent to our current location to populate DP recursively. Then, we return that value to end the function. 

## Key Takeaways
Practice recursive DP. 