---
layout: post
title: Populate Next Right Pointers In Each Node
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

## Testcases
Input: root = [1,2,3,4,5,6,7]

Output: [1,#,2,3,#,4,5,6,7,#]

Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

## Initial Result
Time spent: 40 min.

Pass with suboptimal O(n) BFS solution. 

## Initial Approach
I had touched this problem before but not seriously (less than 5 mins of prior work). I thought about how DFS doesn't let us keep the frontier in memory, but BFS does. When doing BFS by hand, I saw that the frontier is the list of nodes we want chained by "next". I implemented that and couldn't see how an O(1) space solution was possible. 

## What I Missed
When we can't use auxiliary space, we should think about the data we *do* have. This includes nodes with values and pointers. Attaching the left child's ```next``` pointer is simply ```node.left.next = node.right```, but the trickier case is for the right node. If I try and evaluate the "bridging" case (going from the right node of a subtree to the left node of a different subtree) and the more intuitive "same subtree" case, I can see that the right side can also be generalized: ```node.right.next = node.next.left```. It's easy to realize this if you **fill in the next pointers in order when solving by hand**. This solution can then be used with either DFS or BFS to achieve O(n) time and O(1) space. 

## Approach to the Solution
Use the ```node.left.next = node.right``` and ```node.right.next = node.next.left``` relationship rules to populate next pointers on each node via either DFS or BFS. 

## Key Takeaways
For time and space limitations, think of how you can traverse your existing data and what information can be parsed from it. In this case, pointers are available, and they are essential to the optimal solution. Additionally, I should parse search algorithms/graph traversals by hand. 