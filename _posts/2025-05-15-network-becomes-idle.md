---
layout: post
title: The Time When the Network Becomes Idle
# subtitle: An Overview
tags: [algorithms]
comments: true
author: Keshav Santhanam
---

## Problem (shortened)

The server labeled 0 is the master server. The rest are data servers. Each data server needs to send its message to the master server for processing and wait for a reply. Messages move between servers optimally, so every message takes the least amount of time to arrive at the master server. The master server will process all newly arrived messages instantly and send a reply to the originating server via the reversed path the message had gone through.

At the beginning of second 0, each data server sends its message to be processed. Starting from second 1, at the beginning of every second, each data server will check if it has received a reply to the message it sent (including any newly arrived replies) from the master server:

If it has not, it will resend the message periodically. The data server i will resend the message every patience[i] second(s), i.e., the data server i will resend the message if patience[i] second(s) have elapsed since the last time the message was sent from this server.
Otherwise, no more resending will occur from this server.
The network becomes idle when there are no messages passing between servers or arriving at servers.

Return the earliest second starting from which the network becomes idle.

## Testcases

Input: edges = [[0,1],[0,2],[1,2]], patience = [0,10,10]

Output: 3

Explanation: Data servers 1 and 2 receive a reply back at the beginning of second 2.

From the beginning of the second 3, the network becomes idle.

## Initial Result
Time spent: --

Fail. I had faulty math for the time needed to make the network idle after the initial message is received. 

## Initial Approach

I found the shortest path from each node to the master (and back) via an unoptimized BFS. Then, I looped through each data server and simulated the startup of new messages and calculated the time needed to complete as **the time to complete the initial feedback * 2** and then subtracted the the ```covered time``` (```time_to_complete - max(current_jobs)```). 

## What I Missed

We have to use different algebra for this problem. For each distance associated with a patience (each node's information), we can find the time needed in total via the following:

```python
if dist_pat[1] == 0:
    return 0
distance, patience = dist_pat
resends = (distance-1)//patience
return resends * patience + distance + 1
```

## Approach to the Solution

Map all distances (found via BFS) and patiences to the above function, and return the maximum time found. 

## Key Takeaways
Practice graphs to see more emulation-style problems like this. 