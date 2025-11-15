---
layout: post
title: Cheapest Flights Within K Stops
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

## Testcases

Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1

Output: 700

Explanation:

The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

## Initial Result
Time spent: 20 min
Passed with slightly suboptimal BFS. I initially tried Dijkstra's and realized I was rusty on it. I also wasn't confident it would improve this problem (knowledge gap). I then did a BFS, passing in the k stops limit as a parameter. This finds all paths to the node and runs in O(K*(E+V)). 

## Initial Approach
I tried Dijkstra's and then removed the min heap and replaced it with a conventional queue for BFS. I also included the number of stops as a parameter. 

## What I Missed
Dijkstra's allows us to very easily speed up the problem by selecting closer nodes from the frontier. This is relevant since we are not really exhausting all paths, and instead we are exhausting all trips of length k or less. 

## Approach to the Solution
Replace the queue with a min-heap to speed up to O((E+V)*logE)

## Key Takeaways
Focus on when shortest-path algorithms are ideal and when they are not. In this case, we need single source shortest path with an upper vertex/edge bound, and we do not have negative cycles. The part that motivates using Dijkstra's is the fact that we have **weighted edges** and therefore cannot rely on BFS to efficiently traverse all potential shortest paths. 