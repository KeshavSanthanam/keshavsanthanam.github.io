---
layout: post
title: Regular Expression Matching
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem
You are given an input string s and a pattern p. Your task is to implement regular expression matching with support for:

. → Matches any single character.

\* → Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial matches).

## Testcases

("aa", "a", False),  # "a" does not match entire "aa"

("aa", "a\*", True),  # '*' allows repeating 'a'

("ab", ".\*", True),  # '.*' matches any sequence

("aab", "c\*a\*b", True),  # 'c*' matches 0 'c', 'a*' matches 'aa'

("mississippi", "mis\*is\*p\*.", False),  # Complex pattern

("abc", "a.c", True),  # '.' matches any character

("abcd", ".\*d", True),  # '.*' matches everything before 'd'

("", ".\*", True),  # '.*' can match an empty string

("", "a\*", True),  # '*' allows zero occurrences

("", "a", False),  # 'a' cannot match an empty string

## Initial Result
Fail. My solution had the correct idea (backtracking with memoization via a DP dictionary) but only passed most testcases due to flawed logic on character-by-character comparisons when reaching the * symbol. 

## Initial Approach
Time: 80 mins. 

I had the central strategy (which was obvious to me anyways) slightly spoiled for me and that was the use of dynamic programming to use the results of subproblems to help reduce the time needed to solve this backtracking problem. I wrote testcases and tried to identify the state, which I did correctly: the current indices of both the string s and pattern p. From here, I was able to code up the desired behavior for our base case (s_idx runs off of s) and continued to alter it for a while by including p_idx to manage further testcases. The recursive cases were not too complicated to code up but my logic for * cases was wrong, and I failed to resolve this on my own. 

Below is the code for the recursive cases: 

```python

elif p[p_idx] == '.' or s[s_idx] == p[p_idx]:
    prev_char = p[p_idx]
    dp[(s_idx, p_idx)] = True if backtrack(s_idx + 1, p_idx + 1) else dp[(s_idx, p_idx)]
    print('dp mv 1,1')
    return dp[(s_idx, p_idx)]  
elif p[p_idx] == '*' and (prev_char == s[s_idx] or prev_char == '.'):
    temp_s_idx = s_idx + 1
    while temp_s_idx > len(s) and (s[temp_s_idx] == prev_char or prev_char == '.'):
        dp[(s_idx, p_idx)] = True if backtrack(temp_s_idx, p_idx) else dp[(s_idx, p_idx)]
        if dp[(s_idx, p_idx)]:
            print('dp5')
            return dp[(s_idx, p_idx)]
        temp_s_idx += 1
    if temp_s_idx == len(s): # we done
        return True
    dp[(s_idx, p_idx)] = True if backtrack(temp_s_idx, p_idx) else dp[(s_idx, p_idx)]

```

## What I Missed
This failed to catch this testcase: (s='aab', p='c\*a\*b'). This case fails since my code doesn't reflect that a * indicates an element appears 0 or more times. Since my code didn't "look ahead" one position toward the star before evaluating an element, it assumed that a character always appears at least once. 

## Approach to the Solution
Further fleshing out my idea can lead to adding a case for when the prev_char is appropriately updated and the * character is observed. 

## Key Takeaways
Find state faster. Think about how far you need to "look back" in a string before determining if a "pattern match is observed". This encourages a more simple pointer design where we look at p_idx + 1 before evaluating further cases. 