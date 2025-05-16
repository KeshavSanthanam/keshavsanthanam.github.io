---
layout: post
title: Network Delay Time
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

## Testcases

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2

Output: 2

## Initial Result
Time spent: --

Fail. I initially tried to check if the given node was a source node (indegree of 0), but this step isn't necessary. Then I traversed with BFS to the end. Unfortunately, this doesn't find the shortest path. 

## Initial Approach

I used traditional BFS and not Djikstra's. 

## What I Missed

Djikstra's gives us the single-source shortest path to all nodes, and we need to know this value for all nodes in order to find the maximum of that set. 

## Approach to the Solution

Store inputs in an adjacency list. Use a heap in place of a queue. Keep track of the nodes visited, and return the time from the most-recently-popped time in the heap's ```(time, node)``` pairs. Visit all neighbors by adding them to the queue while avoiding loops. 

## Key Takeaways
Practice more Djikstra's. 