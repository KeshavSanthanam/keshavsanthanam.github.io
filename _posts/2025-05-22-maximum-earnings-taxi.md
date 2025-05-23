---
layout: post
title: Maximum Earnings From Taxi
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
There are n points on a road you are driving your taxi on. The n points on the road are labeled from 1 to n in the direction you are going, and you want to drive from point 1 to point n to make money by picking up passengers. You cannot change the direction of the taxi.

The passengers are represented by a 0-indexed 2D integer array rides, where rides[i] = [starti, endi, tipi] denotes the ith passenger requesting a ride from point starti to point endi who is willing to give a tipi dollar tip.

For each passenger i you pick up, you earn endi - starti + tipi dollars. You may only drive at most one passenger at a time.

Given n and rides, return the maximum number of dollars you can earn by picking up the passengers optimally.

Note: You may drop off a passenger and pick up a different passenger at the same point.

## Testcases

Input: n = 20, rides = [[1,6,1],[3,10,2],[10,12,3],[11,12,2],[12,15,2],[13,18,1]]

Output: 20

## Initial Result
Time spent: 50 min

Fail due to TLE. 

## Initial Approach

I tried using DP to maintain the previous indices and also the total dollars collected for each case. This allowed me to solve subproblems involving the first n elements where n increases until we take into account all rides. This takes O(n^2) time and that is not fast enough to pass all cases. 

## What I Missed

The total time is given as ```n``` and can be used to evaluate the problem on each time step. 

## Approach to the Solution

We can combine the above statement with some more information:

1. We can memoize the start, end, and profit for each ride we can choose to service. 
2. We can maintain a maximum variable and update our ```profits``` dictionary as we find trips we can complete. 

The second part above follows this pattern:
1. Check if the current time has a greater price; if so, update the max value
2. Update the profit at this time with the max value (this is time series data so we want to include winnings from before t = 3 at t = 4, 5, ...)
3. Loop through all possible rides starting at the current time. Update the end time's profit with the winnings from each ride. 

## Key Takeaways
Practice dynamic programming. 
