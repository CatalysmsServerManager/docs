# Support

If you were trying to answer a question and these docs don’t provide you with one, worry not!

The best way to contact someone is via our [Discord server](https://catalysm.net/discord). In there, you can either ask your question in the appropriate support channel or you can create a personal ticket with Tickety discord bot.

  

::: warning
 Please do **NOT** PM staff directly. You will have to wait until this specific person sees your message. It is **MUCH** better to ask your question directly in the discord where multiple people can see it and answer. Also consider the fact that many people do not appreciate being PMed for general questions.
:::

## Ticketer

**Create a new ticket:** -new

This will create a private channel with you and support staff.

If you have a general question, it’s better to ask in the public channel as you’ll likely get answered faster there.

  
## Additional info

  

To provide support, we might need more info. This will help us debug the problem and help you faster. If a support staff member asked you to provide more info, it's best to create a new ticket and paste all the info there. Helps to keep issues separate.

### Problems with the website

Try refreshing the page. If that doesn't fix it, try [refreshing your cache](https://refreshyourcache.com/en/home/)

If you ask support tell us what browser you are using

Check your browser console for errors. CSMM can capture errors and display debug info in the console window that you can send the support team.

To open the console you can either click your browsers' 'more options' button or you can use one of these keybinds

      - Chrome: Press Ctrl+Shift+J (Windows / Linux) or Cmd+Opt+J (Mac).

      - Firefox: Press Ctrl+Shift+K (Windows / Linux) or Cmd+Opt+K (Mac).

      - Edge: Press Ctrl+Shift+J

After that, select the 'console' tab to view info and error messages from the website. Try refreshing the page, doing the action that triggers the error and look at console then. You might see a red error message, yellow warnings (less important, usually wont break something) or a custom error message like this:

```
\---------
--------- 

  \_\_\_\_\_                    
  |  \_\_\_|                   
  | |\_\_ \_ \_\_ \_ \_\_ \_\_\_  \_ \_\_ 
  |  \_\_| '\_\_| '\_\_/ \_ | '\_\_|
  | |\_\_| |  | | | (\_) | |   
  \_\_\_\_/\_|  |\_|  \_\_\_/|\_|   
                                                     
  
Ajax request 
You can copy and paste this info to the support team. 
Be
 careful! The data of your request might include sensitive details about
 your session (csrf token). Make sure you create a support ticket and 
share the info there if you are unsure. 
---------
Headers: 
X-Firefox-Spdy: h2

cf-ray: 48730df87a42a887-CDG

content-length: 40

content-type: application/json; charset=utf-8

date: Mon, 10 Dec 2018 22:12:44 GMT

etag: W/"28-oJY7us8WD4tEcf0m1GRgKhawDEQ"

expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"

server: cloudflare

vary: Accept-Encoding

x-exit: badRequest

x-frame-options: SAMEORIGIN

x-powered-by: Sails <sailsjs.com>

Status: 400 - Bad Request 
URL: GET /api/sdtdserver/cpm/setting?\_csrf=E4yhZyJy-ttvC43fREM2Z5cSO-pK\_6yRnVnY&serverId=264&setting=prefix 
Data: 

---------
```
  

This message includes valuable debug information. It can show the exact URL that was used and what data was actually sent to the server. You should post this info in a private ticket because it might contain sensitive data.

## Ingame problems

If you have unexpected behaviour for something that happens ingame (commands, cron jobs, economy, ...) please provide this data:

*   Output of the **version** command. This will show what mod versions you have installed and can help us track down compatibility problems.
*   The output / error message.
*   Show the configuration of the affected module. Screenshot is best.

It can also be useful to look at your server logs. There's several ways to do this; CSMM console on server dashboard, telnet, text file on your server, ... Choose whatever method you prefer. Repeat the action that has weird/incorrect behaviour and look for any messages regarding CSMM or CPM. You can also just copy the entire log from the time period when you did the action. 