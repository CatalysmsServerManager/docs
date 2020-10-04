---
title: 'Important Modding Info'
---


# Modding your server 


One of the main reasons to start running your own server is to be able to customise the game your way. Although you can change some of the game settings easily enough by editing the serverconfig.xml, there are many other aspects to the game that you or your players may like changed. It's important to understand what limits are in place and why, and how to keep mods compatible with each other, and with tools like CSMM/CPM.

There are plenty of tutorials out there on how to start modding; this document is designed to make sure your mods don't lead to you having problems with CSMM/CPM.


## Server-side vs. Client-side mods 

When a player joins a 7 Days to Die server, any server-side mods are downloaded to their computer in order to give them the correct experience. Only certain changes can be made using these server-side files. To add entirely new assets (such as custom zombie types, updated weapons graphics, or custom inventory icons) the mod must be loaded Client-side as well, which means players have to install the mod themselves before trying to join.

To make sure it's easy for players to join your server, you'll probably want to keep it server-side. To do so, stick to the following changes:
* any of the xml files under /Config can be edited
* new items can be added in these xml files as long as they re-use existing icons using the CustomIcon property
* icons can be tinted to a custom colour using the CustomIconTint property
* The vanilla Localization.txt can be appended or modified

## CSMM/CPM Compatibility

CSMM and CPM do not need to be made aware of new items that are added by mods; the server itself looks after this information. However, when adding any custom items it's important to make sure that they have a unique name that follows the existing standard, and importantly **does not contain spaces**.

For instance, if you are adding a new type of Beer to the game, you can do this by appending a new item in the items.xml file, duplicating (or extending) the existing Beer item, and giving it different properties. The original Beer item is "drinkJarBeer". Your new item should be named something along the lines of "drinkJarBeerLager" - this way, any searches for people carrying drinks will include your item, and if you decide to write another mod that changes something about Beer you can apply the same change to both drinks with one line of code.

In order for your new item to show up in-game with a friendly name, you should add a Localization entry to the mod. The Localization.txt file is a CSV (comma-separated values) file, and any entries you put into this file will be merged into the game as part of the mod.

The file starts with a 'header' line that defines the columns for the rest of the file. These columns are vital:

`Key,File,Type,UsedInMainMenu,NoTranslate,english`

and the remaining columns are only needed if you wish to include other languages (which is a good idea, but it won't break the game if you don't).

Under this header, the following lines should follow the same order of blocks of text separated by commas. If a text block includes a comma itself, it must be "enclosed in quotes".

`Key` is the item name you have added (e.g. drinkJarBeerLager)  
`File` is the name of the file in which it is added (e.g. Items)  
`Type` is only need in certain circumstances; if you've duplicated an item check what Type the original item had (e.g. Food)
`UsedInMainMenu` is usually left blank for mods, especially server-side ones
`NoTranslate` is similar to UsedInMainMenu, leave it blank in almost all cases
`english` is the column where the friendly name for your item goes (e.g. Lager)

It's also worth adding another line for the description of the item. This can be reference in the items.xml by the property DescriptionKey.

## Example code

items.xml
``` xml
<configs>
<append xpath="items/">
  <item name="drinkJarBeerLager">
    <property name="Extends" value="drinkJarBeer"/> <!-- Reuse everything from normal Beer, except what's specified below -->
    <property name="CustomIcon" value="drinkJarBeer"/> <!-- It'll try to use the icon drinkJarBeerLogo.png which doesn't exist, so point it at this one -->
    <property name="DescriptionKey" value="drinkJarBeerLagerDesc"/> <!-- Give it a description that indicates how it's different from Beer -->
    <effect_group tiered="false" name="Drink Tier 3"> <!-- This is where we change the behaviour - it lasts longer and gives more bonus damage -->
      <requirement name="NotHasBuff" buff="buffIsOnFire"/>
      <display_value name="dStaminaRegen" value=".5"/>
      <display_value name="dEntityDamageBrawling" value="4"/>
      <display_value name="dStunResist" value="1"/>
      <display_value name="dDuration" value="60"/>
      <triggered_effect trigger="onSelfPrimaryActionEnd" action="ModifyCVar" cvar="$buffBeerDuration" operation="add" value="48"/>
      <triggered_effect trigger="onSelfPrimaryActionEnd" action="ModifyCVar" cvar="$buffBeerDuration" operation="set" value="138">
        <requirement name="CVarCompare" cvar="$buffBeerDuration" operation="GT" value="138"/></triggered_effect>
      <triggered_effect trigger="onSelfPrimaryActionEnd" action="AddBuff" buff="buffBeer"/>
    </effect_group>
  </item>
</append>
</configs>
```

Localization.txt
```
Key,File,Type,UsedInMainMenu,NoTranslate,english
drinkJarBeerLager,items,Food,,,Lager
drinkJarBeerLagerDesc,items,Food,,,"Why just drink a beer, when you can have a fancy European lager? Extra damage and longer lasting!\n400% Fist Melee Damage\n50% Stamina Gain"
```

At this stage, we just have a new item in the game. There's still more to do if you want to show up in loot, or be craftable in the stove, but you can spawn it in the creativemenu and give it to people via CSMM.
