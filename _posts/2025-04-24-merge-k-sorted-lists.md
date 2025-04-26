---
layout: post
title: Merge K Sorted Lists
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given an array of k linked lists, where each linked list is sorted in ascending order. Your task is to merge all the linked lists into one sorted linked list and return its head.

## Testcases
[Below represented as a series of 3 (k) linked lists.]
lists = [
    [1,4,5],
    [1,3,4],
    [2,6]
]
Output: [1,1,2,3,4,4,5,6]

# Initial Result
Fail. I didn't even attempt it since the O(nk) time solution seemed trivial (and is - for more information, see Merge Two Sorted Lists), but I failed to understand how a heap would optimize the problem. I was hinted to that a heap would be necessary, but I failed to understand how to use it in a way that was faster than O(nk) (the same complexity as before but with heaps this time).

## Initial Approach
I believed that the trivial solution would be to scan the heads of k lists for each node removal (n), leading to O(nk). With the idea of using a heap in mind, I thought of forming k heaps, each with n elements. This would involve O(n*log(n)) * k time for heap creation, which is already worse than the overall time for the trivial solution. 

## What I Missed
I didn't think of all the ways to use a heap. I assumed that the only efficient way to use one is by inserting all elements of a list into a heap, but clearly there is a better way (in an interview-like environment, you would definitely explore this better solution once prompted to beat O(nk), implying that the "better way" exists). If I think about including a heap, there is only one other way to use it: insert some (but not all) elements. What group of values are we most interested in? We know that the next node to add is always one of the leading elements of the k lists. This should motivate us to try that insertion and then find a way to repopulate the heap upon removal (go back to the same list from which you obtained the last element). 

## Approach to the Solution
Recognize that a min heap that holds only the "frontier" (leading) elements and continuously inserts upon removal only takes O(n * log(k)) time for n elements across k lists. Notice that discerning between elements correctly requires populating the frontier initially (so the min heap should contain all leading elements before we start our add-remove sequence). Realize that we should add back in elements from the same list that we are using an element from (to send to output), so attach an index to the value, making a heap of tuples. 

## Key Takeaways
When hinted about the correct data structure to use to make/improve a solution (common in live interviews), think about all the ways you can use it (not just the first one that came to mind). When stuck with a case that feels funny (adding in elements from the same list doesn't *seem* to preserve the ordered case), just dry run it to see if it will work or not. 