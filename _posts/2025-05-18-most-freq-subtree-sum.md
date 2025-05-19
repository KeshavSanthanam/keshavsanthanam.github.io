---
layout: post
title: Most Frequent Subtree Sum
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

## Testcases

Input: root = [5,2,-3]

Output: [2,-3,4]

## Initial Result
Time spent: 12 min

Fail. I tried to optimize beyond just calling DFS on all nodes but that did not work via DFS or BFS. 

## Initial Approach

I tried DFS while passing in prefix sums such that the sums up to each node along a path can be update for each node reached during DFS. I then realized this was misunderstanding the problem - it is necessary to know the left-side and right-side sums of children in order to know the total subtree sum. This led me to try BFS, but this does not solve the problem.  

## What I Missed

Even with BFS, we would need to consider all nodes downstream of each node, and progressing up or down a level changes the total sum dramatically by duplicating or pruning the reachable nodes. Therefore, we should call DFS on each node and recursively determine the sum, which can then be counted. 

## Approach to the Solution
Call DFS on each node, and recursively determine the new sum from this node's subtree. Store the sum for each node, and use a dictionary to determine the most frequent element(s). 

## Key Takeaways
Dry run optimization on DFS/BFS to avoid exploring wrong solutions. 
