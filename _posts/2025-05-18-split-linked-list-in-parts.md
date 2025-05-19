---
layout: post
title: Split Linked List in Parts
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.

## Testcases

### Example 1
Input: head = [1,2,3], k = 5

Output: [[1],[2],[3],[],[]]

### Example 2
Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3

Output: [[1,2,3,4],[5,6,7],[8,9,10]]

## Initial Result
Time spent: --

Pass, but I needed to handle cases like in Example 1 where there are more parts than nodes. 

## Initial Approach

I determined the segment sizes by using integer division to find the lowest size for any segment and then adding 1 to each segment in order until the total length was met. I then used the head pointer to traverse and had a ```past_head``` pointer to add each part to the output list when each segment is at capacity. 

## What I Missed

I forgot to add empty lists to satisfy the cases that there were more parts than nodes. 

## Approach to the Solution

The solution is the same as the initial approach except one must keep track of any needed parts with insufficient nodes (simply ```k - length``` when k > length) and then add the appropriate ```None``` entries. 

## Key Takeaways
Review all constraints for problems that could have edge-case behavior. 

