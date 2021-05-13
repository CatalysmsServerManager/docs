# Practical example: Deadly air drops

Using CPM's advanced claim together with CSMM's handlebars syntax we can create an area around every supply crate that drops, which will trigger an ambush of zombies on the first player to approach the supply crate. We need to identify the entityID of the supply crate, the area to claim around the crate, then create the claim, and finally when the claim is entered, send a horde of an appropriate size after the player.

[[toc]]

## The hook to pull the coordinates of the airdrop

First we need to create a hook that will pull the coordinates of the drop, and rewrite them along with the entity ID of the supply crate. To do this we will use a logLine hook with two custom variables. When the supply crate is spawned in the air, the following line is logged:

```
AIAirDrop: Spawned supply crate at (-125.2, 199.1, -20.1), plane is at (-127.4, 209.1, -19.7)
```

So we will create a logLine hook with the search string "Spawned supply crate at" and then use the following two custom variables:

```
xcoord :    (?<=Spawned supply crate at \()(-?\d{1,4})
zcoord :    (?<=Spawned supply crate at \(-?\d{1,4}\.\d, -?\d{1,4}\.\d, )(-?\d{1,4})
```

Note that we are avoiding the decimal points in the coordinates and only grabbing the integers, but when including the coordinates in the lookbehind for the zcoord variable we do need to account for the extra characters.

We will use these coordinates to identify the entityId of the supply crate, which will use to create a unique name for the advanced claim in the next step. To get this, our command for this hook will be `w2l command "lce ${custom.xcoord} ${custom.zcoord} 5 SupplyCrate"`. This will look up any entities of type SupplyCrate within 5 blocks of the location of the airdrop, and will output a line including the coordinates again plus the supply crate ID.

## The hook to create the advanced claim

Now we need another hook to listen for the output of the `w2l` from our first hook. The log line for this will be

```
ListEntityCustom: 1. id=447912, type=EntitySupplyCrate, name=sc_General, pos=(-125,50,-20)
```

We don't want to risk creating ambush claims on admins who are using `lce` to look for players' vehicles, so we will use a regex filter on this hook to make sure we only capture SupplyCrates.

Create a logLine hook with the regex filter `ListEntityCustom.*EntitySupplyCrate` - the .* in the middle means this will match any other characters as long as both other sections of text are found around them.

For this hook we need to pick up the SupplyCrate's entityID, and the coordinates again (as they are not stored from the previous hook). Add the following three custom variables:

```
SupplyCrateId : (?<=ListEntityCustom: \d\. id=)(\d{1,9})
xcoord :        (?<=pos\=\()(-?\d{1,4})
zcoord :        (?<=pos\=\(-?\d{1,4},-?\d{1,4},)(-?\d{1,4})
```

Now we will create a command claim using CPM which will trigger our final hook when it is entered. We'll use the coordinates of the crate plus and minus 20 to create a square 40 blocks by 40 blocks around it. The command the claim will execute is simply to log a keyword along with the victim's steamID for our final hook, and then delete itself. The command for this is as follows:

```handlebars
ccc add {{custom.SupplyCrateId}} {{subtract custom.xcoord 20}} {{subtract custom.xcoord -20}} {{subtract custom.zcoord -20}} {{subtract custom.zcoord 20}} -1 "command: w2l 'DADambush ${steamId}'; ccc remove {{custom.SupplyCrateId}}"
```

## The ambush hook - levelled to provide an appropriate challenge

Finally we will create a hook that listens for the `DADambush` keyword from the command claim, and creates a horde based on the level of the player. Create a logLine hook with the search string filter "DADambush".

This command tests the player's level with a long logic list and sends a horde when it matches:

```handlebars
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