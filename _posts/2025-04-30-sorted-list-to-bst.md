---
layout: post
title: Convert Sorted List to Binary Search Tree
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

## Testcases
Input: head = [-10,-3,0,5,9]

Output: [0,-3,9,-10,null,5]

Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

## Initial Result
Time spent: 20 min

Pass on suboptimal solution. Stack overflow error on attempt at optimized solution.

## Initial Approach
I detected 2 possible solutions. I decided to do the more trivial solution first (convert the linked list to an array). This was solved by recursively calling generate_bst on the array, splitting at the middle to find the value each time. (I did try this for a while yesterday, and it took a bit of time due to me forgetting to think of the recursive case before coding... remember that!). 

After this, I immediately tried the second approach and almost got it (testcases were failing but the individual testcases were close). 

## What I Missed

I got the slow-fast pointer technique spoiled for me, but I'm fairly certain I could figure that out on my own (the subproblem is clear: how do I get the middle of a linked list? I have solved that same problem recently). When doing so, I examined the cases of 1. even and 2. odd length input lists on paper, but I didn't consider the slow pointer placement rigorously. 

Let's see why it matters to have a trailing prev pointer and how I could have noticed this myself. Below are examples of moving slow and fast pointers from the head to the falsification of the ```fast or fast.next``` condition. 

```
# Case 1
1 -> 2 -> 3 (slow) -> 4 -> null (fast)
```

```
# Case 2
1 -> 2 -> 3 (slow) -> 4 -> 5 (fast) -> null
```

My proposed idea: split by slow.next (making 4 the leading node of our new right branch in both cases). For case 1, the new left segment still contains 3 (slow)! Case 2 also contains 3 (slow), so we end up with segments of sizes (in format L:R) 3:1 and 3:2. We need the left and right segment lengths within 1 of each other, and we can't add the slow value to another node downstream of where we assign it as val (which is in this recursive step). 

## Approach to the Solution
Use slow, fast, and a trailing prev pointer. This way we find the middle (slow) and go one step before and disconnect (via ```prev.next = None```). 

Then, be sure to still assign the middle (slow.val) to the new node's value field and assign ```left``` and ```right``` as recursive calls to ```generate_bst(head)``` and ```generate_bst(slow.next)``` respectively. 

## Key Takeaways
Write out at least two recursive levels. Draw diagrams for linked lists, and consider trailing pointers as another tool in your toolbox (which also contains slow-fast pointers, etc.). 