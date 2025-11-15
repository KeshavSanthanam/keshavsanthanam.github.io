---
layout: post
title: Path With Minimum Effort
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

## Testcases
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]

Output: 2

## Initial Result
Time spent: 50 min

Fail. I had a TLE on my DFS implementation and then got a hint (use Djikstra's). From there, I solved the problem.

## Initial Approach
I thought about using DP but couldn't see how paths could be pruned. Therefore, I did DFS, which takes too long. 

## What I Missed
Djikstra's is faster since we use a min heap to store our future paths, meaning we may find our overall solution (lowest effort path to the end node) before exploring all nodes (and therefore can abandon members of the heap and never explore them).  

## Approach to the Solution
Recognize that we must solve for the shortest path to the final node but that this depends on the shortest path to prior nodes (since we calculate effort based on neighboring differences). So in a way, we are doing BFS with brute force except our heap allows us to strategically exit early. 

Perform BFS with a heap and check range conditions for every potential move in each direction. Store the effort, x, and y in each heap member. Use a dictionary to store the minimum effort to reach each node as we encounter it. **The moment we reach the target node, we can return the effort to reach that node as we know we chose optimal steps to this solution.** 

## Key Takeaways
Practice shortest-path problems. 