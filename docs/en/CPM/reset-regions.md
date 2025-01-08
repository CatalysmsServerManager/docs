# Reset Regions

[[toc]]

## Intro

![Missing image](/assets/images/CPM/resetRegions/8028300.gif)

In 7 Days To Die, the world is broken up into 'regions', which are 500x500 square areas of the map. 7 Days stores all the changes that happen to that part of the world in a single file, called a region file. Reset Regions are a feature of CPM that allows administrators to mark one or more of these region files to be erased (reset) during a special kind of reboot, deleting everything within the specified region(s) and restoring the area back to the way it was at the start of the seed. This process restores buildings and resources back to their original state and removes all modifications, structures, and bases built by players.

After the reboot, a region that has been reset will look exactly like it did on day 1 of the server. This process has no effect on players who are in the marked areas; it only affects the world itself. However, if a player were to log out at the top of their above-ground base before a reset occurred, when they returned to the game, they would be several dozen feet in the air since the base no longer existed, and most likely fall to their death.

Additionally, land claim blocks can't be placed in a reset region, and any that exist when a reset region is marked will immediately be deleted. If a player attempts to place a land claim block in an established reset region, it will return the claim block to them and inform them that they can't build in the area.

![Missing image](/assets/images/CPM/resetRegions/9797644.png)

To see what the regions look like on your map, use the [Alloc's Live Map](/en/CSMM/allocs.html) utility, and enable the Region File checkbox in the upper right corner. It should resemble the grid shown in the screenshot above.

### Managing Region Markers

The command for managing reset regions is called 'mrr', and the syntax for the command is as shown below. Note that this command is used to mark regions for reset; nothing happens to these regions until a reset reboot is triggered. See the next section below for these commands.

mrr  
mrr add \[\<regionName\>\]  
mrr add \<w_boundary\> \<e_boundary\> \<n_boundary\> \<s_boundary\>  
mrr remove \[\<regionName\>\]  
mrr remove \<w_boundary\> \<e_boundary\> \<n_boundary\> \<s_boundary\>  
mrr list  
mrr notificationtext \<enter:exit\>

The first command will show the player's current region based on his/her position. The next two commands are used to add regions to the reset list in two different ways, while the following two are for removing them the same ways. The 'list' version of the command displays a list of all the reset regions that have been marked for reset, and the final command is used to edit the message that the player receives when entering or exiting a marked region.

### Toggling Your Current Region For Reset

![Missing image](/assets/images/CPM/resetRegions/9797645.gif)

The simplest way to toggle a region for reset is to simply run the _mrr_ command in your console while you are online and in-game. When you run _mrr add_, CPM will immediately mark the region the player is standing on for reset, If you run _mrr remove_, it will remove the mark on the region the player is standing on. Click the screenshot to see an animated version.

This command only works while you are in-game (and as a Level 0 Admin), as it requires your current position to calculate which region to modify, and admin rights to flag the region for reset.

### Adding/Removing A Single Region By Name

![Missing image](/assets/images/CPM/resetRegions/9797643.png)

Using the Alloc's Live map linked above, you can see the region grid. Within each region square is a name, shown in the screenshot to the right. To add or remove this region file from the list, you would run one of the two following command:

mrr add r.0.0.7rg

mrr remove r.0.0.7rg

Doing this will add or remove the region file in question from the list. You can see whether the command has taken effect by looking at the Live Map and selecting the Reset Regions checkbox. Regions shaded in red are marked for reset. If you add/remove additional regions while the map is open, uncheck and then recheck the reset regions checkbox to see the updated list.

This is a simple and easy way to add one or two regions to the list without extra effort of figuring out the coordinates, but it isn't efficient for adding a group of regions all at once. For that, use the coordinate system version of the command, below.

### Adding/Removing Multiple Regions Via Coordinates

![Missing image](/assets/images/CPM/resetRegions/8028246.png)

The mrr command accepts two-coordinate X/Z notation as an input as well. To use this command, you specify the west-most, east-most, north-most, and south-most coordinate that make up the rectangle you want to mark for reset. In the screenshot to the right, the W/E/N/S coordinates have been marked. The syntax for this version of the command is as follows:

mrr add \<w_boundary\> \<e_boundary\> \<n_boundary\> \<s_boundary\>

In the screenshot to the right, the command would be as follows:

mrr add 482 580 3084 3000

::: tip
It's important to remember that you aren't just entering a coordinate that has a W or E in it, you're entering the coordinate from the rectangle that is the furthest in that direction. For example, even though the coordinate is 482 East, 482E is more West than 580E, so 482E is the 'west' boundary, and this is why you use it as the West coordinate. Similarly, 3084N is more North than 3000N, even though both coordinates are North.
:::

![Missing image](/assets/images/CPM/resetRegions/9797651.png)

**Note:** Also remember that West and South coordinates are negative values. If your left coordinate was 100W, you would enter it as -100. See the example below.

In this next picture, you have coordinates that are across both the North/South line, and the East/West line. The coordinates for this claim would be as follows. Pay special attention to the negative numbers.

mrr add -150 225 50 -300

![Missing image](/assets/images/CPM/resetRegions/9797652.gif)

When marking regions for reset, it's important to understand that no matter how much of a region you cover with the reset command, it will wipe _the entire region file_. In the screenshot to the right (click to preview the animated version), all three different red rectangles are represented by the three commands below:

mrr add -999 499 999 -499

mrr add -750 250 750 -250

mrr add -600 100 600 -100

Regardless of which command is used, however, all 9 region files will be completely marked for reset. There is no way to mark anything less than entire region file for reset. Remember this!

## Reset Reboot Commands

Region resets don't occur automatically, but must instead be triggered by a special command. There are several different commands that cause a reset sequence, and each one has a slightly different purpose. All of the below commands are documented on the [CPM Console Commands](/en/CPM/console-commands.html) page.

### Wipe Marked Reset Regions

resetregions

### Wipe every region on that map that is not marked as 'claimed'

![Missing image](/assets/images/CPM/resetRegions/9797657.png)The commands for this option are very similar to the regular reset region commands, but understanding what they apply to is much more complicated. In short, these commands will wipe every region on the map that is not 'claimed' in some way. There are two criteria that are checked to determine if a region is claimed or not. If any of them are true, the region will not be reset:

1.  The region contains one or more Land Claim Blocks, or the LCB radius of a block extends into the region. This is represented on the screenshot as a solid yellow square (the LCB) surrounded by another yellow square (the LCB protection radius). In this example, both region 4.-4.2 and region r.-5.2 are considered claimed by that single LCB and its radius.
2.  The region contains one or more Normal [Advanced Claims](/en/CPM/advanced-claims.html), or at least part of an advanced claim extends into the region. This is represented in the screenshot by the green rectangle. Because this claim overlaps two regions, both r.-4.0 and r.-5.0 are protected.

resetunclaimedregions

Unclaimed regions are reset immediately. No reboot is needed for the operation.

## Using Reset Regions Effectively

![Missing image](/assets/images/CPM/resetRegions/reset-regions-overview.png)

The most common use of reset regions is to either wipe a specific area back to day 1 to remove large, impactful changes that can't be repaired otherwise, or to refresh the area in order to allow it to be looted again. A common example of this is where Admins mark some or all of the cities on a map as a reset region; not only does this prevent players from claiming large loot-friendly PoIs, but it also gives the server a way to refresh destroyed loot containers and other limited resources, like cars. In the screenshot to the right, all of the region tiles that contain major city zones have been marked for reset.

Key to the reset region concept is understanding _when_ the regions reset. For example, using the above commands, you can schedule the reset to occur every single time the server reboots, or you can schedule it to only happen periodically, such as once a week. Over on the [scheduled tasks](/en/CSMM/automation.html#automated-server-reboots) page, you can see an example of a regular reboot that fires every day, plus a reset region reboot that fires on Fridays. In this scenario, after the Friday morning reboot, all of the red regions in the screenshot will be reset.

For servers that reset _unclaimed_ regions, on the other hand, region resets may be more useful when they occur regularly, in order to prevent players from building in the open spaces of the map. You will have to use your judgement when determining how often to reset the various regions of your map.
