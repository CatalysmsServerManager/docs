# Practical example: Notification on falling block detection, including player(s) in the area

With handlebars syntax you can loop through every player currently online and run tests against their variables. In this example, we will use a hook that listens for CPM's falling block prevention log line, pull the coordinates from it, and check which players are nearby.

This can be coupled with a discord notification to alert admins that someone has triggered a collapse.

[[toc]]

## The hook to pull the coordinates

CPM's falling block prevention logs the event with some additional info in the format `[CSMM_Patrons] 140 falling blocks prevented! @ 792, 55, -2752`. We can listen for the text "falling blocks prevented!" and use regex to pull the coordinates following this into custom variables.

Naturally we will do this with a logLine hook, and we can use a simple search string `falling blocks prevented!` as our trigger. We need to add a couple of custom variables to this hook, but before we can do that we must save the hook. To do so, we first have to put a command in, as the hook cannot save with a blank command. For now, just enter `wait 10` into the command field.

Now that the hook is saved, we can edit it and create our variables. To create the variables, click the Edit button on the hook and look for the section "**Custom variables**". Our variables will be the X and Z coordinates (as we are not interested in checking altitude - the Y coordinate).

For our first variable, enter the name `xcoord`. For this we need to identify the first 1 to 4 digit number following the @ in the log line, using the following regex:

```regex
(?<=falling blocks prevented! @ )(-?\d{1,4})
```

Save this variable, and then enter the name `zcoord`. This time, we want to identify the 1 to 4 digit number after the other coordinates, which are separated by commas:

```regex
(?<=falling blocks prevented! @ -?\d{1,4}, -?\d{1,4}, )(-?\d{1,4})
```

Once we have these two variables, we can use them to check against the positions of all the players currently on the server.

## The command to check players' positions

First we need to loop through the online players. This is done with handlebars as follows:

```handlebars
{{#each server.onlinePlayers}}

{{/each}}
```

Inside this loop, we will test each player's coordinates against our custom variables. To call a player's position within this loop, we will use the variable <code v-pre>{{this.positionX}}</code>. To call the custom variable we need to go up one level in the variable tree, which looks like <code v-pre>{{../custom.xcoord}}</code>.

In this example we will check if the player is within 20 blocks of the detection. To do this, we get the custom X coordinate minus 20 blocks, and the custom X coordinate plus 20 blocks, and check if the player's X coordinate is more than the lower number and also less than the higher number. We'll repeat this with the Z coordinates, and if both are true, the player is nearby.

```handlebars
    {{#if (and (gte this.positionX (subtract ../custom.PositionX 20)) (lte this.positionX (sum ../custom.PositionX 20)))}}
        {{#if (and (gte this.positionZ (subtract ../custom.PositionZ 20)) (lte this.positionZ (sum ../custom.PositionZ 20)))}}
        
        {{/if}}
    {{/if}}
```

In the middle of this block we can put the command that we would like to fire, in this case a notification to the player.

```handlebars
            pm {{this.steamId}} "{{this.name}}, You have been detected drop mining at {{this.positionX}}, {{this.positionZ}}. Staff have been alerted.";
```

:::tip
Note the semicolon at the end of this line. As there may be multiple players in the area, the end result may include multiple notifications and these need to be separated with semicolons in order for CSMM to fire them as separate commands.
:::

Our resulting command for the hook is:

```handlebars
{{#each server.onlinePlayers}}
    {{#if (and (gte this.positionX (subtract ../custom.PositionX 20)) (lte this.positionX (sum ../custom.PositionX 20)))}}
        {{#if (and (gte this.positionZ (subtract ../custom.PositionZ 20)) (lte this.positionZ (sum ../custom.PositionZ 20)))}}
            pm {{this.steamId}} "{{this.name}}, You have been detected drop mining at {{this.positionX}}, {{this.positionZ}}. Staff have been alerted.";
        {{/if}}
    {{/if}}
{{/each}}
```

## The discord notification for admins

Finally we will set up a Custom Discord notification to alert admins about the activity. Under the server settings > Discord settings, click the Custom Notifications button. Choose a channel to send the alert to, and in the "Text to search for" box enter "You have been detected drop mining". As the pm sent to the player includes this text, the player's name, and the coordinates, the notification sent to discord will also include this information in case further action is deemed necessary.
