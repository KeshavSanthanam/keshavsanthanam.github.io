---
layout: post
title: Construct Binary Search Tree from Preorder Traversal
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem (shortened)
Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

## Testcases
Input: preorder = [8,5,1,7,10,12]

Output: [8,5,10,1,7,null,12]

## Initial Result
Time spent: --

Fail. I incorrectly handled the logic on selecting the next node (this could lead to duplicate nodes due to recursive array splicing). I also failed to continue looping through and exhausting all nodes (leading to just the left side of my desired tree). 

## Initial Approach
I made a recursive function that relied on the idea that a min/max bound would enforce the BST's sorted property and result in nodes being attached only when appropriate. 

## What I Missed
I didn't loop through all nodes in my tree. I also didn't maintain the correct indexing state, which is also simpler than splicing (and avoids sending the same node down two different paths). 

## Approach to the Solution
Call a recursive DFS function that takes in the current node and min and max values for the next node. Use a ```while``` loop to take in nodes as long as the ```idx < len(preorder)``` and the min and max bounds are satisfied. Find the current value in preorder and attach it either left or right as appropriate. Recursively call DFS from that new node with an updated min/max range. 

## Key Takeaways
Practice recursive graph building (mainly trees). 

