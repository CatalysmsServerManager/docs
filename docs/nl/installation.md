# Snelstart

- Installeer [Alloc's Server Fixes](https://7dtd.illy.bz/wiki/Server%20fixes) als u dat nog niet hebt gedaan. Een [installatie gids](/allocs) is beschikbaar.
- Configureer web API credentials.
- Registreer uw server in CSMM via de website.

Eenmaal uw server geregistreerd is in CSMM, kan u verdergaan met configuratie

- Creëer rollen om admins, moderators toe te voegen.
- Configureer een economie voor uw spelers
- Maak een winkel met ingame items.
- Configureer een support ticket systeem.

Voila! CSMM heeft nu toegang tot uw server en zoekt naar veranderingen of andere gebeurtenissen.

## Configureer web API credentials

De makkelijkste manier om dit te doen is via de console. U kan verbinden met de console via telnet, het controle paneel of in-game.

1. Check of er al tokens zijn:

`webtokens list`

2. Voeg een nieuw token toe

`webtokens add <name> <token> 0`

Let op de 0 op het einde! Het is belangrijk dat CSMM voldoende toegang heeft tot uw server om alle functies te laten werken.

::: warning Deze web tokens zijn gevoelige data! Behandel deze als een wachtwoord. (Hou het geheim, maak ze moeilijk te raden. Het is aangeraden om een combinatie van letters, cijfers, kleine en grote letters)