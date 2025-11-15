---
layout: post
title: Maximum Number of Points with Cost
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want to maximize the number of points you can get from the matrix.

To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score.

However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.

Return the maximum number of points you can achieve.

## Testcases

Input: points = [[1,2,3],[1,5,1],[3,1,1]]

Output: 9

## Initial Result
Time spent: 20 min

Fail. TLE due to O(n^3) solution. 

## Initial Approach

I used the matrix to store the maximum number of points reachable for any given row's indices from the indices in the row above. This populated all of the maximum points for the final row in the final row, and then I returned it's maximum value. 

## What I Missed
We can 2D memoize if (for each row) we make a left to right pass and a right to left pass. Then, we can populate the next row of DP using the maximum value available from each of the above (now only 2) choices. 

## Approach to the Solution

Our DP matrix is 1-index padded, and it's first row leads with a copy of the input matrix. In each pass, we populate the two left/right lists with a comparison of the neighbor directly above (stored in DP) with the item stored in the same left/right array calculated immediately before this one. That preceding element contains the information about the best choice chosen greedily from the previous row's earlier/later indices. We can then populate DP's new row with the max of either left or right (each is a choice) added to the value stored in points at that location. We perform this work for each row, which is O(n^2) (it's good to remember this is O(3 * n^2)). Finally, we return the maximum value of the DP matrix. 

## Key Takeaways
Practice 2D dynamic programming, and focus on when to identify the use of smaller arrays in a matrix calculation. 
