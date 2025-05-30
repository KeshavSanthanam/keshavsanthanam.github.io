---
layout: post
title: Shortest Path Visiting All Nodes
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

## Testcases
Input: graph = [[1,2,3],[0],[0],[0]]

Output: 4

## Initial Result
Time spent: 120 min

Fail. I used an incorrect BFS on the output of Floyd-Warshall's. 

## Initial Approach
I tried using Floyd-Warshall's algorithm to build a matrix of all-source shortest paths. I populated the matrix successfully, but this isn't the solution, and I found I could not perform BFS to traverse one node to another while permitting certain repeating nodes (but avoiding infinite cycles). The desired solution finds a way to handle this. 

## What I Missed
Shortest path problems are generally solved with BFS. This is still true if we want to observe the shortest path from all sources (using looping over start nodes or ideally placing all those states in one large queue containing information about each starting node chosen). We should also store each node and bit-mask visited in a ```visited``` set. 

## Approach to the Solution
Each time we examine a new element popped off the queue, we can verify if all the items are visited in the mask. If not, we loop through the neighboring nodes and (once we ensure this node and mask has not been seen before) flip the bit related to the neighboring node and add a new entry to the queue (with an increasing count). We return count when we have visited all nodes (as determined by our mask). 

## Key Takeaways
Practice shortest path problems (and separately find if Floyd-Warshall is useful for a different problem). 