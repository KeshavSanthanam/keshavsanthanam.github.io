---
layout: post
title: Recover Binary Search Tree
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

## Testcases

Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

## Initial Result
Time spent: --

Fail. I couldn't identify the pattern, and I got a hint about the inorder traversal, but I didn't see the relevance. 

## Initial Approach

I thought about doing DFS with lower and upper bounds, but only one bound is necessary and can be checked during the (expected solution's) inorder traversal. 

## What I Missed

**The inorder traversal of a BST is a sorted list of its elements.** This means we can find an O(n) space solution by traversing and identifying the out-of-order nodes before swapping their values. (I also didn't realize that we could swap values instead of the nodes themselves at the end.)

## Approach to the Solution

Maintain prev, first, and second nodes. If we don't see that the new node is out of place (less than prev), do not do anything other than update prev. Otherwise, we make first initialize to prev only at the *very first* node traversed to fit this criteria. Then, update second to the node's value and then update prev to end this "middle segment" between the two recursive calls. This algorithm allows us to set second to the last out-of-order node seen in the inorder traversal. 

## Key Takeaways
Review more advanced binary tree properties and algorithms. Specifically, look up edge cases where DFS traversals can be useful. 