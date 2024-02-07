---
layout: post
title: How Binary Search Can Speed Up Logarithms
# subtitle: An Overview
tags: [math, algorithms]
comments: true
author: Keshav Santhanam
---

Most people who have taken an algorithms class are aware of the concept of binary search, a searching algorithm that allows you to find an element of some real number value in a **sorted** data structure in **O(log(n))** time. 

Ex: Given an array arr = [1, 3, 4, 6, 7, 8] and integer x = 6, find the index of the value x. If element not found, return -1. 

~~~
def binary_search(arr, x):
	l, r = 0, len(arr) - 1
	while l <= r:
		m = l + (r - l)//2 # integer division for integer l, r values
		if arr[m] < x:
			l = m
		elif arr[m] > x:
			r = m
		else:
			return m
	return -1
~~~

What some people don't realize is that we can use any sequential range with a fixed increment/decrement (or "jump amount") like an array, meaning we can traverse it to find a desired value in the range. This allows us to implement a logarithm function my_log() in O(log(n)) time. 

~~~
MIN_VAL, MAX_VAL = 0.1, 1000

def my_log(base, value, epsilon):
	l, r = MIN_VAL, MAX_VAL
	while l <= r:
		m = l + (r - l)/2 # real division since m is a float
		if value - base**m > epsilon:
			l = m
		elif value - base**m < -1 * epsilon:
			r = m
		else:
			return m
	return -1
~~~


