---
layout: post
title: Delete Node in a BST
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
 

## Testcases
Input: root = [5,3,6,2,4,null,7], key = 3

Output: [5,4,6,2,null,null,7]

## Initial Result
Time spent: --

Fail. I used an incorrect strategy to iteratively organize nodes while maintaining the same values on each node. 

## Initial Approach
I recursively found the key via DFS and then used temporary pointers to move the left tail to the end of the right tail before pushing up the right node to replace the current node. This involved keeping track of a previous node too. This strategy doesn't work for rotating up smaller values to the left of a value to the right of the target node. 

## What I Missed
Once we narrow down our right subtree, we can copy the smallest value into the node that is the root of the right subtree and then recursively call our function to delete that same small node. 

## Approach to the Solution
Recursively call the given function to filter down to our target node (if present). Then, we just have to return a reference to the node we're interested in. If the graph continues only to the left or only to the right, we trivially return the next node available. Otherwise, **we find the smallest value that is part of the right-side subtree.** We use its value to replace the value of our current node and then recursively call our function to delete that small-valued node. 

## Key Takeaways
Consider updating values in trees/lists when convenient. 