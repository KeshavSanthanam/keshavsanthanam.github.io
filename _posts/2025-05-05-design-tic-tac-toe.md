---
layout: post
title: Design Tic-Tac-Toe
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Assume the following rules for a Tic-Tac-Toe game on an n x n board between two players:

A move is guaranteed to be valid and is placed on an empty block.

Once a winning condition is reached, no more moves are allowed.

A player wins if they succeed in placing n of their marks in a row horizontally, vertically, or diagonally.

Implement the TicTacToe class:

TicTacToe(int n): Initializes the object with the size of the board n.

int move(int row, int col, int player): Indicates that the player with ID player plays at the cell (row, col).

The move is guaranteed to be valid, and players alternate making moves.

Returns:

0 if no winner after the move.

1 if player 1 wins after the move.

2 if player 2 wins after the move.

## Testcases
["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]

[[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]


## Initial Result
Time spent: 30+ min

Pass after adding in functionality for the second diagonal. 

## Initial Approach

I maintained counts of the items in each row, column, and "first" diagonal. I forgot about the second diagonal. I also maintained an unnecessary matrix, which I removed at the end. Initially, I also incremented and decremented by the wrong amounts (should be +1/-1 to indicate score). 

## What I Missed

I forgot to include the second diagonal and included an unneeded matrix, increasing space complexity from O(n) to O(n^2). 

## Approach to the Solution

Maintain counts of the "score" (add for one player and subtract equal amounts for the second player) for each row, column, and both diagonals (all 4 types of win conditions). Then, check the scores (only the ones you just updated) after you finish updating them. 

## Key Takeaways

Think a little harder about what data is needed for your problem and how to encode problem state. 
