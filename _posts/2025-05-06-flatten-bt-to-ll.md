---
layout: post
title: Flatten Binary Tree to Linked List
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.

The "linked list" should be in the same order as a pre-order traversal of the binary tree.

## Testcases

Input: root = [1,2,5,3,4,null,6]

Output: [1,null,2,null,3,null,4,null,5,null,6]

## Initial Result
Time spent: --

Fail. I wasn't able to see how to adjust the chains of left nodes into right nodes while maintaining the branches to be attached (though I did recognize that the right-leaning branches should be attached to the left-leaning branch leaves.)

## Initial Approach

I didn't really have an approach other than the trivial O(n) space solution. 

## What I Missed

I didn't try to iteratively traverse down right-side branches (followed by left-side branches) to restructure the list. 

## Approach to the Solution

Copy the head. While you can still move leftward, do so and rename this node ptr. Move the ptr to the right as far as you can go and then attach the original head's right side to this. Then, attach the whole segment you worked on to the right-most pointer. Set the left pointer to None, and move the head rightward at the upper level of the while loop. Continue until the head nulls out. 

## Key Takeaways
Practice tree construction problems, and review the strategy used here to move all nodes rightward after the reattachment of the right-leaning side. 
