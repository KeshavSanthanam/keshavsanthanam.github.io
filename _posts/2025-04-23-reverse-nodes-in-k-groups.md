---
layout: post
title: Reverse Nodes in k-Group
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You're given the head of a singly linked list and a positive integer k. Your task is to reverse the nodes of the list in groups of k and return the modified list.

If the number of nodes is not a multiple of k, then the last remaining nodes should remain as-is.

You cannot alter the values of the nodes—only change the links between them.

## Testcase(s)
Input: head = [1,2,3,4,5], k = 2

Output: [2,1,4,3,5]

Explanation: The list is reversed in groups of 2. Similarly, if k = 3, the output would be [3,2,1,4,5] because the remaining group of 2 nodes (4,5) is left untouched.

# Initial Result
Fail. My solution satisified edge cases only. I was able to achieve segment reversal but failed to appropriately connect reversed segments in order with the remainder of the list (leading to cycles in the end result). 

## Initial Approach
I read the problem and thought of it in terms of the popular problem Reverse Linked List, where each (curr, prev) pair is reversed in unison to produce a list starting at the original end and linearly progressing to the original start. Determining which nodes were in groups (as opposed to residing outside of one, indicating they should be left untouched) was solved quickly with modulo arithmetic. 

My first instinct was to generalize the process of finding that reversal point and performing all needed reversals for a single group of size k. I found that I can move (k-1) times to the right to find myself at a node that ends the current group. From there, I can reverse the nodes while storing the next_node (as required by the aforementioned Reverse Linked List problem). Throughout the group, I should store all ListNode objects to refer to later when propogating the reversal backwards. This gave me the reversed group, but I failed to connect it to the existing nodes. 

## What I Missed
Firstly, I failed to recall that reversing a sublist doesn't require storing all the visited nodes for retrieving later. This is since I imagined reversing from the end backwards, but this isn't how we efficiently reverse a linked list. Furthermore, a reversed group needs to have its "furthest" node (the one prior to nulling out) ready to connect to the beginning of the next group while attaching its very beginning to the last element of the previous group. That last element is a hint towards the solution, which maintains a dummy node at the beginning. (I falsely assumed that would complicate the answer, but my assumption was based on a misunderstanding that the front of the original list would no longer be the front of the final list (notice the similarities to Reverse Linked List? I connected concepts that are relevant to that problem to this similar but quite different problem)). 

## Approach to the Solution
As mentioned previously, a dummy node at the beginning allows us to generalize one step of our algorithm to all reversals (including the first): reconnecting the reversed group to the rest of the list. There is actually very little else that was missing in my solution other than connecting the ends of the reversed group. 

## Key Takeaways
Linked list problems generally benefit from dummy pointers attached to the head when they involve any relocation of nodes across the list. Specifically, I would have solved this problem if I looked at more than 2 testcases and **wrote out the logic to reach those cases**. I got stuck when I realized I needed to "turn around" my reversed group on my page, and resolving this before coding would have led to a correct algorithm. 