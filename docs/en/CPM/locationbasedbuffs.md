# Location based buffs

## Intro

CPM uses buffs for communicating through tooltips (buffs) in the advanced claim system. Its very easy to make use of that system to create areas in which buffs of your liking will be applied (and auto debuffed when leaving the area). Aka location based buffs. For more info on that system and how to use your own, read in CPM mod folder /Config/buffs.xml. For location based buffs you will be using adv. claim notify.

## Example: Simulate tprotect in a specific area

These buffs are used for a adv. claim notify called "ProtectedLobby". Make sure to edit the buff when your adv. claim notify has a different name.

```
<!--Cant do damage to blocks-->
        <buff name="cpm_tooltip_ProtectedLobby_enter" name_key="cpm_tooltip_ProtectedLobby_enter" icon="ui_game_symbol_destruction2" icon_color="46,244,41" tooltip_key="[00FF00]Welcome to the lobby[-]">
            <display_value_key value="Lobby"/> <display_value value="xxx"/> <stack_type value="ignore"/>
            <effect_group>
                <passive_effect name="BlockDamage" operation="perc_set" value="0"/>
                <passive_effect name="BlockDamage" operation="perc_add" value="-1"/>
                <passive_effect name="DisableItem" operation="base_set" value="1" tags="melee" />
                <passive_effect name="DisableItem" operation="base_set" value="1" tags="ranged" />
                <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkDemolitionsExpert" />
                <passive_effect name="DisableItem" operation="base_set" value="1" tags="perkTurrets" />
            </effect_group>
        </buff>
<!--Remove buff for exiting the ProtectedLobby notify claim-->
        <buff name="cpm_tooltip_ProtectedLobby_exit" name_key="cpm_tooltip_ProtectedLobby_exit" icon="ui_game_symbol_add" tooltip_key="">
                <display_value_key value="Lobby"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="1"/>
          <effect_group>
                <triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_ProtectedLobby_enter"/>
                <triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_ProtectedLobby_exit"/>
          </effect_group>
        </buff>
```

## Example: Make a player invulnerable against any harm

These buffs are used for a adv. claim notify called "SafeZone". Make sure to edit the buff when your adv. claim notify has a different name.

```<!--Cant take damage-->
        <buff name="cpm_tooltip_SafeZone_enter" name_key="cpm_tooltip_SafeZone_enter" icon="ui_game_symbol_add" icon_color="46,244,41" tooltip_key="[00FF00]Take a deep breath, you are safe from harm now.[-]">
            <display_value_key value="SafeZone"/> <display_value value="xxx"/> <stack_type value="ignore"/>
            <effect_group>
                <passive_effect name="GeneralDamageResist" operation="base_add" value="1"/>
                <passive_effect name="ElementalDamageResist" operation="base_add" value="200" tags="cold,heat,electrical"/>
                <passive_effect name="PhysicalDamageResist" operation="base_add" value="200"/>
                <passive_effect name="PhysicalDamageResist" operation="base_add" value="200" tags="coredamageresist"/>
                <passive_effect name="ElementalDamageResist" operation="base_add" value="200" tags="heat,electrical"/>
            </effect_group>
        </buff>
        
        <!--Optional tooltip buff for exiting the notify claim-->
        <buff name="cpm_tooltip_SafeZone_exit" name_key="cpm_tooltip_SafeZone_exit" icon="ui_game_symbol_add" tooltip_key="[00FF00]Be careful now. You are not protected anymore![-]">
            <display_value_key value="SafeZone"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="0"/>
            <effect_group><triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_SafeZone_exit"/></effect_group>
        </buff>
```

## Example: Increase running speed by 100%

These buffs are used for a adv. claim notify called "SpeedRun". Make sure to edit the buff when your adv. claim notify has a different name.

```<!--Run 100% faster-->
        <buff name="cpm_tooltip_SpeedRun_enter" name_key="cpm_tooltip_SpeedRun_enter" icon_color="128,0,255" icon="ui_game_symbol_run" tooltip_key="[00FF00]You are 100% faster while running![-]">
            <display_value_key value="Speedrun"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="0"/>
            <effect_group>
                <passive_effect name="RunSpeed" operation="perc_add" value="1"/>    
            </effect_group>    
        </buff>

        <!--Optional tooltip buff for exiting the notify claim-->
        <buff name="cpm_tooltip_SpeedRun_exit" name_key="cpm_tooltip_SpeedRun_exit" icon="ui_game_symbol_run" tooltip_key="[00FF00]Your runspeed is normal again![-]">
            <display_value_key value="Speedrun"/> <display_value value="xxx"/> <stack_type value="ignore"/><duration value="0"/>
            <effect_group><triggered_effect trigger="onSelfBuffStart" action="RemoveBuff" buff="cpm_tooltip_SpeedRun_exit"/></effect_group>
        </buff>
```
