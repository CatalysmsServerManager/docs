# Custom notifications

Custom notifications are a powerful system to send alerts from your server to Discord.

## String matching

The most basic form is string matching. With this method, you input a certain string (eg "zombieKilled") and whenever that string shows up in a log line, a message will be sent to your Discord channel. 

:::tip
String matching is simple but it can get very spammy. Try to craft your search string so it matches exactly the log line you want.
:::

## Regex matching

Regex allows you to have much more flexibility and precision in what notifications you want to see. We will not cover regex here, you can find lots of guides and tutorials online. You can use regex on CSMM by surrounding your search string with `/`. eg `/regex-trigger/`

- Notification when a certain zombie type is killed

`/\[CSMM_Patrons\]entityKilled: .* \(\d{17}\) killed zombie zombieScreamer with .*/`

This will fire whenever someone kills a "zombieScreamer". You can adjust this to work for other zombies aswell.


:::tip
You can find many regex helper tools online, for example: [Regexr](https://regexr.com/5luh9). When you are creating a regex, it's useful to use a playground for testing. It can help you get your regex just right, you can automatically test different versions of a log line to make sure you can match every version you want. 
:::

### Using named captures

CSMM custom notifications support named captures, this means you can easily extract information from a log line and use it in your message. Taking the example from before, we add named capture groups to the regex.

`/\[CSMM_Patrons\]entityKilled: (?<playerName>.*) \((?<steamId>\d{17})\) killed zombie (?<zombieType>zombieScreamer) with (?<weapon>.*)/`


![Example config](/assets/images/CSMM/custom-notifications/named-capture-1.png)

By adding these named captures, we can now use that info in our message: `Wow! ${playerName} just totally destroyed a ${zombieType} with a ${weapon}`

![Example result](/assets/images/CSMM/custom-notifications/named-capture-2.png)

