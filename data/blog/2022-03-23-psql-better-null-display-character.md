---
title: "A better null display character"
date: "2022-03-23"
---

I learned this from this video from PG Casts by Hashrocket

https://youtu.be/wjG4nwZB_gg


# Why

In `psql`, empty strings and `NULL` look the same

So we can make `NULL` show up as `∅` with

`\pset null '∅'`

You can put this line in your `~/.psqlrc` file