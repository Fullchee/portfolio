---
title: "Blindfolded: split a deck of cards so they have the same number of face up cards"
summary: ""
---
[[leetcode]]

## Problem
1. You're blindfolded
2. You have a deck of cards
3. 13 cards are randomly face up
    4. 39 cards face down

### Goal
* have 2 piles of cards such that each pile has the same number of face up cards


## What can we do?

### Operations

* I can flip a card from face up to face down or vice-versa
    * I don't know which one I'm actually doing
* I can somehow divide the cards into groups
    * because I don't know anything about the cards individually, I will only lose information if I split them up
    * so I likely have to do one split in order to not lose information

### Brute force attempts

Pile A: 1 card and pile B with 51 cards in the other
* possible result: 0-1 in pile A and 13 or 12 in pile B

Pile A: 2 cards, pile B: 50 cards
* 0, 1 or 2 in pile A and 13, 12, 11 in pile B

Pile A: 13 cards, pile B: 39 cards
* 0, ..., 13 in pile A and 13, … 0 in pile B

If I were to take 13 random cards and flip them in pile A
* if there were 0 face up cards originally pile A
    * after we flip, there would be 13 in pile A
    * the same number as Pile B
* if there were 1 face up card …
    * the same number as Pile B
