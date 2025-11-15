---
layout: post
title: Arithmetic Slices
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
Time spent: 20 min

Pass. Initially, I had my variables confused. 

## Initial Approach

I used each element as a potential starting element and summated the count as appropriate (the same way as the final solution). 

## What I Missed

I got ```start_idx``` and ```idx``` confused. 

## Approach to the Solution

Allow each element to be the beginning of a new sequence. Determine gap size between the first and second element. Then, use the gap size to add to a subcount each timewe observe the same gap between the second and third elements, third and fourth, etc. Once this condition fails, exit the inner loop, and add this subcount to your total. Return the total after using each of the elements as your starting index. 

## Key Takeaways
Short variable names are fine, but keep track of them when writing your code (train yourself to scan the code before running as well). 