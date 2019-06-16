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
      
![](/assets/images/CSMM/commonAdminTasks/5210470.png)  
      
This problem can be solved by configuring your announcements for exact times using the [cron time selection tool](https://crontab.guru/) linked in the CSMM scheduled task creation page, and spacing them out evenly. In the screenshot above, the 'rules' announcement fires every half hour, but does so specifically at minute 10 and minute 40 of every hour. Two minutes later, the minibike rule will go off as well. A few minutes later, the Discord alert goes off. Between these two groups of events, the vote reminder goes off. Specifying the exact time is only really useful if you have a lot of chat events that trigger regularly.

