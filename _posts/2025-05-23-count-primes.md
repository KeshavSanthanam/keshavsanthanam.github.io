---
layout: post
title: Count Primes
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
Given an integer n, return the number of prime numbers that are strictly less than n.

## Testcases
Input: n = 10

Output: 4

Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

## Initial Result
Time spent: --

Fail. I made mistakes in implementing the Sieve of Eratosthenes.

## Initial Approach
I generated prime numbers through brute force. This is bad since it fails to take advantage of the fact that multiples of known primes are known to be composite. 

## What I Missed

The sieve does not depend on whether the original number is prime or not (multiples of any number are composite by definition). 

## Approach to the Solution
Maintain a DP list indicating that all numbers in consideration are assumed to be prime. Initialize 0 and 1 as non-prime basecases. Beginning from 3 (due to 2 being the only even prime), we can check if all the values before this value are valid divisors or not, and if they are, we can set our current value as composite. Regardless of what we decide, we can now mark all other multiples of our current value as composite. This allows us to only loop through the first sqrt(n) values in the first place. The sum of our primes array is equal to the number of primes. 

## Key Takeaways
Think more about efficient case generation for more math-y problems. 


