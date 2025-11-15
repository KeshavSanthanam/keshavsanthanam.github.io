---
layout: post
title: Number of Provinces
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem (shortened)

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces (disconnected subgraphs).

## Testcases

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]

Output: 2

## Initial Result
Time spent: --

Pass. I used a space-inefficient way of maintaining the nodes discovered. 

## Initial Approach

I used BFS from each node (while avoiding re-visiting nodes that have been seen in a prior BFS) to populate a local visited set and then join it with a persistent one. Once all nodes have been visited, I returned the number of times BFS ran. 

## What I Missed

We can speed up this problem by using a list to indicate the state (visited or not) of each node. This is the same way we can represent graph coloring. 

## Approach to the Solution

You can use BFS and keep track of visited nodes via a "coloring" list. 

## Key Takeaways

Practice graph coloring problems. Merging set b into a looks like ```a = a.union(b)```. 
