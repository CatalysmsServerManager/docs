# Practical example: Scoreboard for animals killed

If you want to keep tabs on how many animals each player killed and display a top 3 (or 5 or 10 or...), you can achieve this very easily using variables.

[[toc]]

## Reacting to an animal kill in game

First, to do something when an animal is killed, you need to add a new hook, and choose "Player kills animal" from "What event will trigger this hook" dropdown list.

To monitor players progress, you need to use a variable, and you want each player to have it's own variable, so we are going to use their names in the end of the variable to do that. 
Let's call this "Animals-killed-by-" and add the player name to that. Will be easier to know what this variable is about if you start using a lot of counters. 

The command looks like this:

```
{{setVar (append "Animals-killed-by-" player.name) (add (getVar (append "Animals-killed-by-" player.name)) 1)}}
```

That goes in the `Commands` section of the hook we just made.


Say a player called Edward122 kills a boar and it is his very first animal. In the playground's variables section (under experiments) you will see a variable named "Animals-killed-by-Edward122" with a value of 1.

As the killing goes, the number will increase. Remember that zombie animals count as zombies only, so they don't add up to this.

If you don't want to make a scoreboard for all animals but just one, let's say rabbits, insert a search string while making the hook with the ingame name of the animal. In this case, animalRabbit.

## Accessing and using the variables

Now you have the kill counts, but how do you retrieve that information in a way you can use it? With listVar.

listVar can list, sort, and limit how many variables are returned. For a top 5, we want to list all animal kill variables, but also sort them by value in a descendent order, and limited to 5 results. We need a `#each` loop for that, and here is how that looks:

```
{{#each (listVar "Animals-killed-by-" "value" "desc" 5)}} 
{{/each}} 
```


The <code v-pre>{{#each}} {{/each}}</code> if for the loop part, listVar is the "action" that will look for any variable that has "Animals-killed-by-" in the name, sort by "value" in "desc" order and return 5 results, ignoring all others.

Each loop iteration returns a variable that has a name and a value for us to use. Even though "Animals-killed-by-Edward122" does the trick, we can do better than that, by displaying only the player name. So let's remove the first part of the variable name and use a "say" command to announce the scoreboard. Looks like this:

```
say "This are the current top 5 animals slayers from the server:"; 
{{#each (listVar "Animals-killed-by-" "value" "desc" 5)}} 
say "{{remove this.name 'Animals-killed-by-'}} - {{{this.value}}} animals killed"; 
{{/each}} 
```

This whole block could be added as a new custom command such as `/top5animals`, for example. Remember, you add custom commands in the `Ingame commands` section of CSMM. It could also be something sent automatically from time to time using the `Server automation` part of CSMM.

As a custom command, if you want to prevent players from spamming the scoreboard in the chat, you can change the `say` part for `pm {{player.entityId}}`, so it gets sent only to the player using the command, as a private message. 

When you wipe, make sure you delete the variables if you wish to restart the scoreboard, using the playground interface. 

And that is it. A one line hook and a 4 lines command and you can have an animal killing competition. Happy hunting!
