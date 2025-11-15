---
layout: post
title: 01 Matrix
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.

## Testcases
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]

Output: [[0,0,0],[0,1,0],[0,0,0]]

## Initial Result
Time spent: 30 min

Pass. I received a hint about using a queue after unsuccessfully trying to populate values in row-column order. 

## Initial Approach

I traversed each row and looked at neighbors to decide the distance (```new distance = 1 + min cost neighbor```). 

## What I Missed

A queue allows you to populate the heights of nodes neighboring your frontier. We can start with zeroes and then add the nodes with newly-discovered distances to the queue. 

## Approach to the Solution

Find all zeroes, and add their locations to a queue along with an initial distance of 0. Set the distances of neighboring nodes to ```1 + previous_weight```. Store all distances in a new matrix. 

## Key Takeaways
Draw out a more complicated testcase from the beginning when the default ones are too simple (very common!). 