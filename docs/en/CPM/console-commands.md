# Console Commands

[CPM](/en/CPM/index.html) has a _lot_ of functionality, more so than most people realize, and it's very easy to miss some very helpful configuration settings that allow you to use the more useful features.

::: tip
New command prefix

Starting with CPM 5.35, all CPM-specific commands have been given the prefix 'cpm-' to identify which mod they are part of. As a result, commands like 'brender' are now named 'cpm-brender'; however, an alias has been added to the older name, so that Admins with experience in the older names can still use them. As an example, all three of the following commands would be valid and produce the same result:

- cpm-chatgroupcolor
- chatgroupcolor
- cgc

You can type 'help' to see all possible commands, and any command provided by CPM will have the prefix listed. Alternately, to only see CPM-related commands, you can type 'cpm-help' instead.
:::

## High-level

This section will go over the quick-set commands you can use to configure the high-level functionality.

### an

The AN command configures the Nighttime announcer, which is a script that warns players that night is approaching, which is especially useful for both horde night, and servers that have zombies running after dark. Recommended settings are:

an true  
an warnhours 3  
an announcer Botname

The above settings will enable the announcer, provide a 3-hour warning before in-game darkness, and all alerts and warnings will be sent by the server with the name 'Botname', which you can change to be anything you want.

### hccp

The hide chat command prefix feature allows you to hide player chat that is related to CSMM/CPM commands. For example, if a player types /claim in order to obtain their shop purchases, hccp would prevent that chat from appearing in the game.

hccp /,\$

The above command will hide all chat lines that begin with the / or $ characters. CSMM uses $ by default for commands, and CPM uses / by default for commands. The comma that separates the two symbols is required.

### pfb

The prevent falling blocks feature was added to reduce or eliminate huge drop mining collapses within the game. When PFB is enabled, any block that would drop due to structural integrity issues will instead simply vanish. This prevents sand/gravel drop mining from causing hundreds of blocks to fall at once, which will often lag or crash a server completely. Similarly, if you destroy the structural supports for a base and cause it to drop, the affected blocks will simply cease to exist. PFB also generates a log line entry in the console, which can be captured via a Discord notification and sent to the admin team in Discord.

pfb 20

If PFB is set to any value above zero, it will vanish falling blocks; the numeric parameter of the pfb command only specifies how large the collapse must be before it is recorded as a log event. This prevents PFB from spamming the console log with 1-2 dropped block events when players destroy temporary frames or mostly-collapsed small structures in-game. A value of 20 is recommended for PFB.

### scn

The Server Chat Name feature allows you to customize the 'Name' of the server when it sends chat messages via CPM. Typically, this would be the same value as the 'an announcer' command above.

scn Botname

## Reference

CPM has a built in function to list all avalaible console commands (cpm-help), which give you a global description of the available commands. For detailed info on a command do:

```
help <command>
```

Also available [as JSON](/assets/commands/cpmCommands.json)

<cpm-commands />
