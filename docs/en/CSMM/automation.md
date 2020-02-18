# Server automated commands (cron jobs)

Cron jobs allow you to configure commands to run at specific time intervals. You can set up a job to run every x minutes or hours. Advanced users can also use the cron syntax to define their jobs. This allows much more control and ‘cool stuff’ you can do.

## Step-by-step guide

1.  login to CSMM
2.  Go to settings > Server automation click new
3.  add the command you would like to execute
4.  add the cron syntax for when the command is run i would advise using [crontab](https://crontab.guru) to make this easier

## Examples

Most servers have regularly-occurring announcements that go out to the in-game players. These announcements can be everything from a reminder of the rules, a suggestion to go vote for the server, a list of Admins who are available, etc. These announcements are typically triggered by using the 'say' or 'say2' command. Some examples of these announcement types are shown in the screenshot below, and you can see that color formatting has been applied to make the announcement more visible within the in-game chat.

Announcements are very easy to create, but the scheduling part of the job is tricky. A lot of server admins schedule their announcements to go off every half hour, every hour, every three hours, etc. Consider the below:

#1 - Every 30 minutes, a reminder to vote goes off.  
 #2 - Every 40 minutes, a reminder of the Admin team appears.  
 #3 - Every hour, a reminder of the rules goes off.

Eventually, these timers will overlap. At the top of the hour, #1 and #3 go off at the same time. At the top of every even-numbered hour, all three will go off at the same time. This creates a huge chat spam, and in some cases, the first or even second message may instantly scroll off-screen.

### Automated world saves

Depending on your hosting method, your game server most likely has an automated world saving mechanism enabled. People who rent servers that have a game control panel, for example, usually have a setting that looks something like the below, which forces the game to save the settings every 15 minutes. Not all panels have this sort of setting, and in some cases the save interval may be long (3-4 hours), which means you will lose too much data if you have an unexpected crash.

![Missing image](/assets/images/CSMM/commonAdminTasks/5210465.png)

Instead of using the panel hosting option for saves, you can create a scheduled cron command within CSMM to force a world save.

![Missing image](/assets/images/CSMM/commonAdminTasks/5210467.png)

This world save will trigger every 20 minutes, forever.

### Automated server reboots

7 Days is notorious for the server performance getting worse over time, so regularly scheduled reboots are the simple and easy way to fix this problem. With CPM installed, a special reboot capability becomes available: a command called _shutdownba_, which allows you to trigger a reboot with a timer, and the server will provide automated warnings as that timer runs down. At the end of the timer, it will boot all the players, save the world, and then reboot the server. This command is also \_bloodmoon aware (shutdownba), \_which means that it will never trigger during a blood moon and interrupt the event. Instead, if the timer would run down and execute during the blood moon event cycle, it will pause until several in-game hours after the event ends, and then start the timer.

The _shutdownba_ command also has an additional parameter called _reset_, that can be used to trigger a [reset region](/en/CPM/reset-regions.html) wipe. If you use reset regions only for problem areas and don't typically have very many defined, you can set the shutdownba command to use the reset parameter every time it triggers. Other servers will mark huge portions of the map as a reset region in order to regenerate the area occasionally (once a week or so), and in that case, you can run a separate scheduled command for the reset region reboot process.

The screenshot below shows two separate reboot commands; the first is a normal reboot that runs every day of the week except Friday, and the second is the same command, but with the 'reset' parameter enabled, which only runs on Fridays. On this specific server, several of the major cities on the map are permanently marked as a reset zone, and each Friday, the server reboots and resets those cities in order to restore all damaged and destroyed buildings and loot containers.

![Missing image](/assets/images/CSMM/commonAdminTasks/5210469.png)

The above commands will trigger a reboot at exactly 10AM EST. Because CSMM is located in London, cron jobs must be set to run in the GMT-0 time zone. You can [look up your offset calculation](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) in order to determine how to schedule your settings properly. In this case, '50 14' means 9:50AM EST (14:50 GMT), and the command 'cpm-shutdownba 10' will trigger a 10-minute delayed reboot, which will execute exactly at 10AM.

![Missing image](/assets/images/CSMM/commonAdminTasks/5210470.png)

This problem can be solved by configuring your announcements for exact times using the [cron time selection tool](https://crontab.guru/) linked in the CSMM scheduled task creation page, and spacing them out evenly. In the screenshot above, the 'rules' announcement fires every half hour, but does so specifically at minute 10 and minute 40 of every hour. Two minutes later, the minibike rule will go off as well. A few minutes later, the Discord alert goes off. Between these two groups of events, the vote reminder goes off. Specifying the exact time is only really useful if you have a lot of chat events that trigger regularly.
