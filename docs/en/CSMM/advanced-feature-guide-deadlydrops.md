# Practical example: Deadly air drops

Using CPM's advanced claim together with CSMM's handlebars syntax we can create an area around every supply crate that drops, which will trigger an ambush of zombies on the first player to approach the supply crate. We need to identify the area to claim around the crate, then create the claim with a unique name, and finally when the claim is entered send a horde of an appropriate size after the player.

[[toc]]

## The variables we will use for the claim

First we need to create a hook that will pull the coordinates of the drop, and use those to create a command claim around the drop which will trigger the ambush. The log line when the Supply Crate is spawned looks like this:

```
AIAirDrop: Spawned supply crate at (-125.2, 199.1, -20.1), plane is at (-127.4, 209.1, -19.7)
```

So we will create a logLine hook with the search string "Spawned supply crate at" and then use the following two custom variables:

```
xcoord :    (?<=Spawned supply crate at \()(-?\d{1,4})
zcoord :    (?<=Spawned supply crate at \(-?\d{1,4}\.\d, -?\d{1,4}\.\d, )(-?\d{1,4})
```

Note that we are avoiding the decimal points in the coordinates and only grabbing the integers, but when including the coordinates in the lookbehind for the zcoord variable we do need to account for the extra characters.

We will use these coordinates to create the claim, but we also need to make sure that the next airdrop doesn't try to create a claim with the same name. For this, we will use the <code v-pre>{{time}}</code> variable. This outputs the real-world time when the command is run, and it is unlikely that another supply drop will happen at exactly the same time on another day. We'll call our claim <code v-pre>DeadlyDrop{{time}}</code>.

## The 'command' advanced claim

Now we have the coordinates and a unique name, we need to put these together to create the command claim. This will trigger our second hook when someone enters the area. We'll use the coordinates of the crate plus and minus 20 to create a square 40 blocks by 40 blocks around it. The command the claim will execute is simply to log a keyword along with the victim's steamID for our next hook, and then delete itself. The command for this is as follows:

```
ccc add DeadlyDrop{{time}} {{subtract custom.xcoord 20}} {{add custom.xcoord 20}} {{add custom.zcoord 20}} {{subtract custom.zcoord 20}} -1 "command: w2l 'DADambush ${steamId}'; ccc remove DeadlyDrop{{time}}"
```

## The ambush hook - levelled to provide an appropriate challenge

Finally we will create a hook that listens for the `DADambush` keyword from the command claim, and creates a horde based on the level of the player. Create a logLine hook with the search string filter "DADambush".

This command tests the player's level with a long logic list and sends a horde when it matches:

```
{{#if (lt player.level 10)}}
th {{player.entityId}} 4
{{else if (lt player.level 20)}}
th {{player.entityId}} 8
{{else if (lt player.level 40)}}
th {{player.entityId}} 12
{{else if (lt player.level 70)}}
th {{player.entityId}} 16
{{else if (lt player.level 100)}}
th {{player.entityId}} 20
{{else if (lt player.level 140)}}
th {{player.entityId}} 24
{{else if (lt player.level 200)}}
th {{player.entityId}} 28
{{else if (lt player.level 250)}}
th {{player.entityId}} 32
{{else}}
th {{player.entityId}} 36
{{/if}}
```

You can use the CPM claim creator map to check these claims are being created correctly and delete them if they are problematic for your players.
