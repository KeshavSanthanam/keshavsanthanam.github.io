---
layout: post
title: Merge Nodes in Between Zeros
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

## Testcases
Input: head = [0,3,1,0,4,5,2,0]

Output: [4,11]

## Initial Result
Time spent: --

Fail. I had the same pointer design but incorrectly tracked dummy. 

## Initial Approach
I had a dummy pointer that would sit at the first zero in our two-zero sequence and then used a second pointer for the second zero accordingly. This was flawed since the problem actually wants us to remove the zeroes bounding each range to summate, so I modified the arrangement to keep dummy right before a dedicated pointer for the first zero. Then, I used an integer to summate the values in between and stored the results in a new node between the dummy and the node following the second zero. 

## What I Missed
I was adjusting dummy and then returning the same pointer, leading to an incomplete list. I also failed to disconnect the final zero (we expect to end up with one zero at the end stored at ```first_0```). 

## Approach to the Solution
Perform the same logic as above with disconnecting of dummy and an early return whenever there is one zero and no second zero to accompany it. 

## Key Takeaways
Draw out pointers for linked list problems. 