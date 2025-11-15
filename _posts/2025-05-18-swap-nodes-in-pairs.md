---
layout: post
title: Swap Nodes In Pairs
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

## Testcases

Input: head = [1,2,3,4]

Output: [2,1,4,3]

## Initial Result
Time spent: 15 min

Pass. I had to fix the connections between the second node in one pair with the first node in the next. 

## Initial Approach

I maintained a first and second pointer for each node in a pair and attached second to first and then attempted to attach first to the next second. 

## What I Missed

We should use three pointers, one of which represents the third node (first of the next pair). This is essential for treating the first pair like the second one by allowing for us to point to our new leading node from the preceding pair. 

## Approach to the Solution

Store pointers at the values of your current pair and the first one in the next pair as well. Attach second to first and first to third; then, attach dummy to the second such that our list is reconnected. Move dummy forward twice and begin the next iteration again. 

## Key Takeaways
Draw out linked list problems; keep in mind the uses of trailing pointers (treating subgroups equally). 

