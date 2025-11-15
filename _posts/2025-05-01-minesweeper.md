---
layout: post
title: Minesweeper
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Let's play the minesweeper game (Wikipedia, online game)!

You are given an m x n char matrix board representing the game board where:

'M' represents an unrevealed mine,

'E' represents an unrevealed empty square,

'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals), digit ('1' to '8') represents how many mines are adjacent to this revealed square, and 'X' represents a revealed mine.

You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').

Return the board after revealing this position according to the following rules:

If a mine 'M' is revealed, then the game is over. You should change it to 'X'.

If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.

If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.

Return the board when no more squares will be revealed.

## Testcases
Input: board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]

Output: [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

## Initial Result
Time spent: 40 min

Fail, but I passed after reviewing the problem statement (which was motivated by seeing the description of a solution). 

## Initial Approach
I recognized this problem as some base cases on top of standard BFS. While coding, I re-reviewed the recursive requirement to understand that I need to expand from nodes that are empty and do not contain neighboring mines, but I got confused about how to implement BFS. I was calling the master function for expansion recursively, which was due to me forgetting that adding to the queue alone should suffice. I also overcomplicated by making a ```handle_e``` function as well as a ```BFS``` function when the first can be part of the second. 

## What I Missed
I failed to see that BFS alone can handle all recursive expansion. I knew this fact in isolation but was not confident that this idea would lead to all necessary expansions in the problem. This was exacerbated by poor choices in variable names. 

## Approach to the Solution
Check if you hit a mine, and if you have not, add the ```click``` entry to the queue. This can then be popped off. Check the count using an easy-to-write helper function and then mark appropriately (if the count > 0) or add to the queue (if count == 0). Return the board when the queue empties or a mine is struck. 

## Key Takeaways
Practice BFS/DFS. Determine what state can be managed/determined during your graph traversal before writing it. 