---
title: Persistent variables
---

# Persistent variables

Persistent variables are a way to store data during custom commands/hooks. You can save some data when you fire a hook and later retrieve that data when executing a different hook. You can use persistent variables everywhere you can use [Handlebars](./advanced-handlebars.html).


Persistent variables are stored as key-value pairs. Both the key and the value are strings and can have a maximum length of 250 characters.

```
{{setVar "my-key" "my-value"}}
{{getVar "my-key"}}
{{delVar "my-key"}}
```

A basic example is a simple counter:

```
{{setVar "counter" (add (getVar "counter") 1)}}

This command has been executed {{getVar "counter"}} times
```

In that example, the `counter` variable is incremented by 1 each time the command is run. 

```
player1: $test
server: This command has been executed 1 times
player1: $test
server: This command has been executed 2 times

player2: $test
server: This command has been executed 3 times
```


Persistent variables can have multiple scopes depending on the type of variable. If you want to store a counter of how many times a specific player has executed the command:

```
{{ setVar (add "player:counter:" player.steamId) (add 1 (getVar (add "player:counter:" player.steamId))) }};

say "You have executed this command {{getVar (add "player:counter:" player.steamId)}} times"
```

Notice how now we are using the players Steam ID inside the key of the variable. This will create a separate variable for each player, allowing us to make the counter different for each player.

```
player1: $test
server: You have executed this command 1 times
player1: $test
server: You have executed this command 2 times

player2: $test
server: You have executed this command 1 times
```
## List var Handlebars helper

This helper gives allows you to search, filter and sort lists of persistent variables.

### Simple search with limit

`listVar <search query> <limit>`

```
{{#each (listVar "test" 4)}}
  {{{this.createdAt}}} - {{{this.updatedAt}}} - {{{this.name}}} - {{{this.value}}} - {{{this.server}}} - {{{this.preventDeletion}}}
{{/each}}
```

### Search and sort

`listVar <search query> <column to sort by> <sort direction>`

```
{{#each (listVar "test" "name" "asc")}}
  {{{this.createdAt}}} - {{{this.updatedAt}}} - {{{this.name}}} - {{{this.value}}} - {{{this.server}}} - {{{this.preventDeletion}}}
{{/each}}
```

### Search, sort and limit

`listVar <search query> <column to sort by> <sort direction> <limit>`

```
{{#each (listVar "test" "name" "desc" 4)}}
  {{{this.createdAt}}} - {{{this.updatedAt}}} - {{{this.name}}} - {{{this.value}}} - {{{this.server}}} - {{{this.preventDeletion}}}
{{/each}}
```