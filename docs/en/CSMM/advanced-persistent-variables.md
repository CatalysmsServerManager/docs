---
title: Persistent variables
---

Persistent variables are a way to store data during custom commands/hooks.

## How persistent variables are stored

Persistent variables are stored as key-value pairs.

```
- key1: value1
- key2: value2
- my-key-name: my-value
etc
```

Persistent variables can have 2 scopes: 'server' and 'player'. When the 'server' scope is used, a variable name is global. When the 'player' scope is used, a variable name can be reused by multiple players.

So for example, if you want to store a counter of how many times a player has executed the commend, you can use the following code:

```
setVariable('player', 'my-command:counter', {{getVariable('player', 'counter') + 1}});
say "You have executed this command {{getVariable('player', 'counter)}} times"
```

// TODO: Note the syntax I used here. It implies a few things which are going to be important for implementation:

// - Nested functions (not currently supported, would need to recursively resolve function calls when they appear in parameters. Might be hard to do? Idk)

// - Usage of a CSMM function inside Handlebars `\{\{getVariable('player', 'counter') + 1\}\}` -> Also not supported right now but maybe possible? Can we execute async stuff inside Handlebars?

// This syntax might need to change if these points are not achievable

Because the variable is using the 'player' scope, the value will be different for each player.

```
player1: $test
server: You have executed this command 1 times
player1: $test
server: You have executed this command 2 times

player2: $test
server: You have executed this command 1 times
```

If you instead want to keep track of how many times the command has been executed in total, you can use the 'server' scope:

```
setVariable('server', 'my-command:counter', {{getVariable('server', 'counter') + 1}})
say "This command has been executed {{getVariable('player', 'counter)}} times"

```

```
player1: $test
server: This command has been executed 1 times
player1: $test
server: This command has been executed 2 times

player2: $test
server: This command has been executed 3 times
```

## Setting a variable

```
// Use the player scope
setVariable('player', 'my-key', '1')

// Use the server scope
setVariable('server', 'my-key', '1')
```

Variables can also get an expiry time. This is useful for storing temporary data which gets deleted automatically after a certain amount of time.
Note that when the variable gets updated, the expiry time is also updated.

```
// Set a variable with an expiry (in seconds)
setVariable('player', 'my-key-expiring', 'my-value', 10)
```

## Getting a variable

```
getVariable('player', 'my-key')
```

## Limitations

CSMM cannot keep track of an infinite amount of variables. There are limits to how many variables a user can have. (// TODO: Actual number here to be determined based on performance of implementation).

Some options:

When a player tries to add a new variable, CSMM will check if the player has reached the limit. If so, CSMM will return an error.

When a player tries to update a variable, CSMM will check if the player has reached the limit. If so, CSMM will find the least recently read variable and delete it to make room.

// TODO: What else can be done to inhibit this DB to grow infinitely? Hopefully with best user experience, don't want to randomly delete data from the users/servers.
