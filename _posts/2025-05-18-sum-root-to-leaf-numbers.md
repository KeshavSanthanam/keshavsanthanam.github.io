---
layout: post
title: Sum Root To Leaf Numbers
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

## Testcases
Input: root = [1,2,3]

Output: 25

## Initial Result
Time spent: 5 min

Pass with inefficient array-passing recursive solution. 

## Initial Approach

I used DFS to find each path from root-to-leaf, and I maintained my state via passing an array with each value encountered. 

## What I Missed

Since the array's indices represent digits, we could just use a number instead and multiply it by 10 before adding each new value. This minimizes expensive type casting and reduces the size of the recursive stack. 

## Approach to the Solution

Recursively call DFS while maintaining the total number being built until a leaf is encountered. At this point, add the leaf's integer representation to the total. 

## Key Takeaways
Write out options for recursive state when devising a solution. 

