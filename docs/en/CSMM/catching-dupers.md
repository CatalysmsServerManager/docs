---
title: Catching Dupers Using CSMM
---

# Catching Dupers Using CSMM

Every server has dupers, and they're a pain in the ass to catch. Unless you literally watch them in the process of duping, it's often hard to tell that it's happened unless they are foolish enough to dupe quantities of items that are exactly the same quality. Until now.CSMM's player and inventory tracking feature allows you to definitively tell when/where a player obtained items, narrowing down whether it was a lucky find or a duplicated item, and exactly how many things they found at that exact moment. Below is a real example of a duper that was caught on a server using CSMM, and how little information was needed to determine who did it, when they did it, and what the results were.

<div align="center">
    <iframe src='https://gfycat.com/ifr/ThickShinyCrustacean' frameborder='0' scrolling='no' allowfullscreen width='640' height='535'></iframe>
</div>

## The Problem

A player reported to an Admin that they'd found a box in the region of 2000W/2500S that had two full stacks of vitamins one real-world day after a server wipe, and that they had just seen a specific player leaving the area. It seemed like a slam dunk, but it turned out to be much more complicated, as it always does.

## Proving Innocence

The first part was fairly simple. A player had been accused of duping vitamins. We went into Player Tracking, selected the player, picked the last few days, and hit Get Data. Looking through the inventory log, in the one day since the wipe, CSMM had never seen this player have a vitamin in their inventory. Obviously this was not the guy.

## Finding Potential Suspects

Next was a slightly harder problem to solve. The only suspect was gone, so who else could it be? We knew the location of the box, roughly, so again we turned to Player Tracking. This time, we selected All Players and put in the rough coordinates of the box. We selected the last few days, and a size (radius of scan) of 500 units. Lots of players come up, but none of them had any vitamins on them. We widened the scan to 750 and suddenly had a hit; a player taking two stacks of vitamins out of his inventory. The hit matched the rough box coordinates, so we knew who'd placed the vitamins, now, and had the accurate coordinates for where they were.This was a day two server, so it's very unlikely for a player to have gathered that many vitamins in such a manner, and no low-level player would just shove them all in a box somewhere and leave them. Despite this, we wanted to give him a fair shake, so we decided to inspect further.

## Gathering Proof

Now that we had a suspect, chasing him down was simple. We reconfigured Player Tracking to select just that player, and ran the scan for his last few days. Filtering the results for 'vitamin' gave us quite a set of results. There were regular entries in the database of him picking up vitamins and then putting them back down, followed by him picking them up again in even greater quantities. The timing between each drop and grab was fairly steady, and the location of his inventory changes never varied more than a few units in any direction during the entire process.Examining the map showed that he was standing in the middle of a forest when the dupes occurred, with no reasonable way to obtain the supplies otherwise. Further, his player profile log showed that his zombie kills were extremely limited during this time. In fact, the sporadic kills lined up almost exactly with the duping process. The gaps between his duping sessions pair up nicely with the gaps in kills. From that point, we followed his movements: he headed straight to the trader, then to the box, put the vitamins in, and then left.

## The Confession

After confronting the player about his actions, proof included, he admitted that he was duping and wanted to sell them to the trader to buy an item. However, because we were fresh off the wipe, his barter skills weren't high enough to get a good deal at the time, so he decided to stash them and come back with more. Unfortunately for him, his stashing skills were as good as his barter skills, and another player found his stuff and outed his efforts. Needless to say, he was banned.
