---
layout: post
title: Is Graph Bipartite?
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem (shortened)

A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

Return true if and only if it is bipartite.

## Testcases

Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.

## Initial Result
Time spent: --

Fail. I initially tried to backtrack through all combinations of placing nodes in one of two different sets and checking if all connections were between these sets. This is a very time-intensive approach, and I moved on by looking at what solution was expected. 

## Initial Approach

Backtrack with your state consisting of two sets, which should be disjoint and collectively contain all nodes in the graph. 

## What I Missed

DFS and BFS can both be used to detect bipartite graphs via graph 2-coloring. 

## Approach to the Solution

2-color the graph by ensuring all neighbors are a different color or uncolored. If they are the same color, return False. We can represent color using an array with each node (value) being an index into said array. 

## Key Takeaways
Both DFS and BFS can detect bipartite graphs via 2-coloring adjacent nodes. 
