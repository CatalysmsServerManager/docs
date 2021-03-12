## Handlebars

Handlebars is an extension to the standard commands available in CSMM. Its use allows loops, if-else logic, and mathematical functions. It can be used anywhere in CSMM that will send commands to the 7D2D server: custom commands, hooks, automation, banned items, vote rewards etc.

Features:
* each loops
* if .. else
* mathematical operations
* nested commands

Basic examples:
* Give all players an item
* List players above a certain level
* Restrict a command to players over a certain level

Advanced examples:
* Give a player an item if they die before getting their first kill
* List players' kills, deaths, and kill-life ratio
* Set chat color and admin levels based on CSMM roles

## Features

### each loops

To loop through every item in an array, e.g. the list of players currently online, use the `{{each}}` command. Within this loop, variables related to the current item can be called using `{{this.variable}}`. For example:

```handlebars
{{#each server.onlinePlayers}}
    {{this.name}}
{{/each}}
```

This can be sorted by any attribute that the items in the list have, for example by name:

```handlebars
{{#each (sort server.onlinePlayers "name" "asc")}}
    {{this.name}}
{{/each}}
```

Sorting can be ascending or descending. For descending order, replace the `"asc"` in the example above with `"desc"`.

### if .. else

Conditional statements can be used to run a command only in certain cirscumstances, or different commands for different circumstances.

```handlebars
{{#if (gt player.level 100)}}
    pm {{player.steamId}} "That worked"
{{else}}
    pm {{player.steamId}} "Sorry, you must be at least level 100 for this command"
{{/if}}
```

Note that you do not need to close the `\{\{else\}\}` section. You can chain multiple `\{\{else\}\}` sections with different conditions - the system will use the first match.

```handlebars
{{#if (gt player.zombieKills 1000)}}
    pm {{player.steamId}} "You have over 1000 kills"
{{else if (gt player.zombieKills 500)}}
    pm {{player.steamId}} "Keep going, you're over halfway there"
{{else}}
    pm {{player.steamId}} "You need to get 1000 kills."
{{/if}}
```

Conditions:
* `eq` - equal to
* `ne` - not equal to
* `lt` - less than
* `gt` - greater than
* `lte` - less than or equal to
* `gte` - greater than or equal To

#### and/or conditions

To test against multiple conditions at once, `\{\{#if\}\}` statements can contain `(and)` or `(or)` statements. These statements work as follows:

- `\{\{and (one condition) (second condition)\}\}` - both conditions must be true
- `\{\{or (one condition) (alternate condition)\}\}` - only condition must be true; if both are true the result is still true.

To use these inside an `\{\{#if\}\}` statement, the conditions must be nested:

`\{\{#if (or (gt player.level 100) (gt player.zombieKills 1000))\}\}` - this returns true if the player is above level 100, or has more than 1000 zombie kills.

### mathematical operations

It is possible to manipulate the values of variables on the fly. The following operations are available:

* Addition: `\{\{sum a b\}\}` returns `a + b`
* Subtraction: `\{\{subtract a b\}\}` returns `a - b`
* Mutiplication: `\{\{multiply a b\}\}` returns `a * b`
* Division: `\{\{divide a b\}\}` returns `a / b`
* Modulus: `\{\{mod a b\}\}` returns the whole number remainder of the result of `a / b`
* Rounding: `\{\{round a decimals\}\}` returns `a` rounded to the number of decimals specified e.g. `\{\{round (divide 54 7) 2\}\}` returns `7.71`

Note that ensuring proper order of operation is important. The system will not check PEMDAS; you should use braces appropriately to make sure the operations are performed in the desired order.

### Nested helpers

To call helpers within other helpers, use `( )` instead of `{{}}`.

```handlebars
{{round (divide player.zombieKills (divide player.playtime 60)) 2}}
```

## Basic examples

### Give all players an item

```handlebars
{{#each server.onlinePlayers}}
    giveplus {{this.entityId}} foodBaconAndEggs 2;
{{/each}}
```

Note the ; after the command - this is necessary to split the repeated commands. Without ending the giveplus command, the system will run one long command made up of multiple giveplus commands, and nothing will happen.

### List players above a certain level

```handlebars
pm {{player.steamId}} "The following high-level players are online:
{{#each server.onlinePlayers}}
    {{#if (gt this.level 150)}}
        {{this.name}}, 
    {{/if}}
{{/each}}"
```

Note that because the `{{each}}` loop does not contain a ; the system will generate one long PM with each player that matches the condition, rather than a bunch of PMs. To send multiple PMs, the `pm` command should be moved inside the loop, and the command ended with a ; before the loop repeats.

```handlebars
pm {{player.steamId}} "The following high-level players are online:";
{{#each server.onlinePlayers}}
    {{#if (gt this.level 150)}}
        pm {{player.steamId}} {{this.name}} - level {{this.level}};
    {{/if}}
{{/each}}
```

### Restrict a command to players over a certain level

```handlebars
{{#if (gt player.level 100)}}
    cpm-targetedhorde {{player.entityId}} 25
    pm {{player.steamId}} "Here they come!"
{{else}}
    pm {{player.steamId}} "Sorry, you must be at least level 100 for this command"
{{/if}}
```

## Advanced examples:

### Give a player an item if they die before getting their first kill

Using a hook based on the "player death" event, check their zombie and player kills and if both are zero, give them a pistol:

```handlebars
{{#if (and (eq player.zombieKills 0) (eq player.playerKills 0))}}
    wait 60;
    pm {{player.steamId}} "Died before you did any damage? That's no good. Here's a pity prize."
    giveplus {{player.entityId}} gunHandgunT1Pistol 1 1 0;
    giveplus {{player.entityId}} ammo9mmBulletBall 24;
{{/if}}
```

### List players' kills, deaths, and kill-life ratio

```handlebars
say "Top 5 players online by Kills:";
{{#each (sort server.onlinePlayers "zombieKills" "desc")}}
    {{#if (lt @index 5)}}
        say "{{sum @index 1}}: {{this.name}}";
        say "{{this.zombieKills}} Kills, {{this.deaths}} Deaths, KLR = {{round ( divide this.zombieKills (sum this.deaths 1)) 1}}";
        wait 5;
    {{/if}}
{{/each}}
```

Notes:
Note the `@index` variable used. This counts the iterations of the `{{each}}` loop. The first iteration is 0, so to limit to the first 5 iterations we use `(lt @index 5)` rather than `lte` - index 5 would be the 6th iteration.

When displaying the player's rank in the list, the index is increased by 1. This displays the rank as 1-5, rather than 0-4.

When calculating the kill-life ratio, the death count is increased by 1. This avoids divide-by-zero errors when players have not died. Players with 5 kills and 0 deaths have a 5.0 kill-life ratio.

### Set chat color and admin levels based on CSMM roles

```handlebars
{{#each server.onlinePlayers}}
    {{#if (lte this.role.level 1)}}
        cgc adduser {{this.entityId}} admins;
        admin add {{this.entityId}} 1;
    {{else if (lte this.role.level 100)}}
        cgc adduser {{this.entityId}} donators;
        admin add {{this.entityId}} 100;
    {{else if (lte this.role.level 500)}}
        cgc adduser {{this.entityId}} regulars;
        admin remove {{this.entityId}};
    {{else}}
        cgc adduser {{this.entityId}} players;
        admin remove {{this.entityId}};
    {{/if}}
{{/each}}
```

Note: This requires roles in CSMM to be set appropriately, and the chat groups named to be manually created first.