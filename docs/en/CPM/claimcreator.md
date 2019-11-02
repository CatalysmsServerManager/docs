# Claim Creator Web UI

## Intro

CPM has many advanced claim types and reset regions funcionality. All those areas can be created with consolecommands. For ease of use CPM has a built in claim creator.
With this Web UI its very easy to create advanced claims or mark regions for reset. Just draw the area and click your way through creating claims.

To access the Claim Creator Web UI just add one to the port you are using to access allocs webmap.
So if you are using http://serverip:8082 to access allocs webmap, you add 1 to that port and thus access CPMcc with http://serverip:8083

![](/assets/images/CPM/claimCreator/complete.png)

## Configuring CPMcc

CPMcc uses allocs map for showing it in the claim creator. For this its nescesary to configure a connection to allocs map by use of webtokens.

To do this click "Connection settings" in the navigation menu:
![](/assets/images/CPM/claimCreator/conectionSettings.png)

In the windows that comes up fill in an admin user and admin token as present in allocs webpermissions.xml. You can safely use the one you allready use for CSMM, but not restricted to use that. You can add a new admin user and admin token if you want to (<token name="adminuser1" token="supersecrettoken" permission_level="0" />).
![](/assets/images/CPM/claimCreator/connectionInfo.png)

## Using CPMcc

For actually creating claims you must login via Steam so CPM can determine if you have the permission to do so. Admins level 0 are allowed by default to create claims, view online players and view landclaims on CPMcc.
![](/assets/images/CPM/claimCreator/login.png)

If you want to change the default permissions for CPMcc create claims, view online players and view landclaims you can do so in cpmcc_permissions.xml.

<permission module="cpmcc.createadvclaim\" permission_level="0" />
<permission module="cpmcc.getplayersonline\" permission_level="0" />
<permission module="cpmcc.getlandclaims\" permission_level="0" />

### Creating advanced claims

Make sure you have selected "Select area" in the bottom right selection area.
![](/assets/images/CPM/claimCreator/navarea.png)

Now it's as easy as selecting 2 opposing corners of an area you want to mark. The area will automatically be drawn on the map for you to review.

In the following example i will make a hostile free advanced claim on an entire city. The steps are always the same for creating all types of advanced claims:

Draw the desired area:
![](/assets/images/CPM/claimCreator/selection.png)

Now select "Claims" in navigation menu.
![](/assets/images/CPM/claimCreator/claims.png)

This window will show all your defined advanced claims and reset regions and can be managed from here.
![](/assets/images/CPM/claimCreator/claims_overview.png)

We are going to add the selected area on map as a new claim. Click "Create".
![](/assets/images/CPM/claimCreator/createclaim.png)

Now all you have to do is give your claim a unique name and assign an accesslevel. Then select the type of advanced claim in the dropdown menu. Each type of claim will show you a brief explenation and offers you the possibility to configure all claim parameters (if present).

For my hostilefree advanced claim it looks like this:
![](/assets/images/CPM/claimCreator/hostilefree.png)

You can repeat above steps to create more and different types of advanced claims.

The "Commands" button in navigation menu will show you the number of commands that are awaiting execution (claim creation). In my example that number is 1 as i created only 1 advanced claim.
![](/assets/images/CPM/claimCreator/commands.png)

Click "Commands"

An overwiew of commands to be executed is presented:
![](/assets/images/CPM/claimCreator/commandsoverview.png)

You can review your commands and if all is well, click the green "Execute x commands" button. All claims in the list will be created and are immediately visible on CPMcc Web UI and Allocs Webmap.

### Creating Reset Regions

Make sure you have selected "Select region" in the bottom right selection area.
![](/assets/images/CPM/claimCreator/navregion.png)

Now you can select regions (make the grid visible via floating menu -> Regions) by just clicking on them.
![](/assets/images/CPM/claimCreator/regions.png)

You can select as many as you like and when you are done just do the same steps as above when creating an advanced claim.

Those steps are:

Click "Claims" in navigation menu -> Click "Create" -> Click "Commands" in navigation menu -> Click "Execute x commands"

All your reset regions have been created and are active immediately including enter/exit notification and automatic landclaim removal.


