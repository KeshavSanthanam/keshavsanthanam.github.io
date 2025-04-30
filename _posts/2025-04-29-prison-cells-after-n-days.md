---
layout: post
title: Prison Cells After N Days
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
There are 8 prison cells in a row and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.

Return the state of the prison after n days (i.e., n such changes described above).

## Testcases
Example 1:

Input: cells = [0,1,0,1,1,0,0,1], n = 7

Output: [0,0,1,1,0,0,0,0]


Explanation: The following table summarizes the state of the prison on each day:

Day 0: [0, 1, 0, 1, 1, 0, 0, 1]

Day 1: [0, 1, 1, 0, 0, 0, 0, 0]

Day 2: [0, 0, 0, 0, 1, 1, 1, 0]

Day 3: [0, 1, 1, 0, 0, 1, 0, 0]

Day 4: [0, 0, 0, 0, 0, 1, 0, 0]

Day 5: [0, 1, 1, 1, 0, 1, 0, 0]

Day 6: [0, 0, 1, 0, 1, 1, 0, 0]

Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:

Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000

Output: [0,0,1,1,1,1,1,0]

## Initial Result
Time spent: 40 min.

Fail. One line off! Despite this, I did do a lot of trial and error and failed several runs, which indicates poor problem solving. 

## Initial Approach

I previously had it spoiled that this problem is about detecting the cycle in states (a cycle of size 14 as it turns out). Despite this, I hadn't sat down and coded it yet. I think the intuition around it having a cycle should go as follows:

1. Try brute force. 
2. TLE.
3. Trace the states (via your generated output since it takes too long by hand). 
4. Realize there is no branching (same action each step) and that the state means everything; the only way to condense the states is to observe repeating states. (Comparing tuples also speeds up the solution but isn't necessary.)

To recap, I came into the problem knowing the above optimization, but implementing it went poorly due to naming confusion and not knowing the first-iteration trick. 

## What I Missed

- *"Do I immmediately mark the ends as 0?"*

I initially assumed (correctly) that I should and then later on doubted myself. The testcases confirm that I should, so that should have let me move on, but I was unsure how I would loop back. The moment I started writing out my testcase I noticed that I would have to loop back to the list after day 1 (rather than day 0). Then, I immediately implemented, but my confusion on naming made me get the solution wrong with one line off. 

![emoji of immense suffering](emoji.png)

## Approach to the Solution

Try brute force and observe the TLE. Write out cases and see the cycle. Notice that the cycle does not contain day 0 and so treat day 1 as day 0 by performing one state transition and adjusting n down via ```n -= 1```.  From there, find the cycle (or return early if ```count == n```) and modulo the n days before applying the transformation that many times. 

## Key Takeaways
Think about speedups in terms of...

- memory reads
- memory writes
- what your program state is 
- what your branching factor is (and how does it change)

Follow testcases to clarify the problem, and write out cases for problems involving state transition/pattern detection. 