# Economy

The economy module allows admins to set a cost to multiple actions (teleports, custom commands, …).

## Earners

Players can earn money in different ways.

### Kill earner

Players earn currency for every zombie or player kills they make.

### Playtime earner

Players earn currency by being online on your server

### Discord text earner

Players earn currency by typing in your Discord server.

### Custom function

You can also add (or deduct) currency from players via the [addCurrency function](/en/CSMM/custom-commands.html#functions) in custom commands or hooks.

## Shop

::: tip
Are you migrating from Servertools to CSMM? You can use the [shop converter tool](https://shop-converter.csmm.app/) to transform Servertools shop XML to importable JSON data.
:::

Admins can add items to the shop, set the amount quality and price. These will have infinite stock. Players can go to the same page or use the ingame “$shop” command, to be presented with a menu of items they can purchase. After purchasing, players can claim their items via the ingame “$claim” command.
