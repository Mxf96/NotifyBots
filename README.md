## Invite NotifyBot to Your Discord Server

This website allows users to invite the NotifyBot to their Discord servers. It provides a simple interface with a button that redirects to the Discord OAuth2 authorization page.

### How to Use the Website

1. Visit the Invite NotifyBot website by clicking [here](https://mxf96.github.io/NotifyBot/).
    
2. Click on the "Invite NotifyBot to your server" button.
    
3. You will be redirected to the Discord OAuth2 authorization page.
    
4. Select the server where you want to add the bot.
    
5. Authorize the bot to join your server.
    

### Commands Offered by NotifyBot

- **/setchannel**: Configure the text channel for notifications.
    
    - **Usage:** `/setchannel <channel>`
    - **Description:** This command sets the specified text channel where the bot will send notifications about members joining or switching voice channels.
- **/setprotected**: Configure the protected members.
    
    - **Usage:** `/setprotected members: <member1> <member2> ...`
    - **Description:** This command adds the specified members to the protected list. Protected members will not be automatically banned by the bot.
- **/removeprotected**: Remove members from the protected list.
    
    - **Usage:** `/removeprotected members: <member1> <member2> ...`
    - **Description:** This command removes the specified members from the protected list. If these members join the server and are not in the protected list, they will be automatically banned by the bot.