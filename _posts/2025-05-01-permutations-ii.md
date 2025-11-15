---
layout: post
title: Permutations II 
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

## Testcases
Input: nums = [1,1,2]

Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

## Initial Result
Time spent: 25 min

Pass but with a slow solution.

## Initial Approach
I solved this by using a for loop to fetch the next item (similar to Permutations) but then stored tuple versions of past entries for comparison in the future. This allows me to avoid returning duplicate elements in the output list. 

## What I Missed
I was routinely searching a set containing lengthy ordered tuples to avoid duplicates, which is always going to be slow for large outputs. I was not thinking of any hashmap strategy. 

## Approach to the Solution
Passing a (Counter) hashmap to maintain all to-be-visited variables allows for quick lookup of the **frequencies** of available values to insert in your current array (the one being built for insertion). **Frequencies matter because they force us to only start at distinct elements (limiting us from branching into two of the same element).** Iterating over the candidates takes just as long for a hashmap, but checking if keys are used or not is O(1) with no additional data (all you store is keys and counts without having to traverse all permutations found so far). 

## Key Takeaways
Use Counter more. Consider hashmaps for elimination-style problems (or to replace visited sets for any problem using counts of distinct variables). Apply the same logic described here to Permutations (I). 