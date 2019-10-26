# Useful scripts

## Install/Update Allocs fixes

```bash
#!/bin/sh

MODS_FOLDER=$1
DL_LINK="http://illy.bz/fi/7dtd/server_fixes.tar.gz"

printHeader() {
    printf '%s\n' ""
    printf '%s\n' "##################"
    printf '%s\n' "$1"
    printf '%s\n' "##################"
    printf '%s\n' ""
}

downloadRelease() {
    curl $DL_LINK -SsL -o allocs.tar.gz
}

if [ $# -eq 0 ]
  then
    echo "No arguments supplied. Please specify the path to your Mods folder as first argument."
    exit 1
fi

clear

echo "Downloading release from $DL_LINK"

printHeader "Downloading files"

downloadRelease

printHeader "Extracting files"

mkdir -p allocs-temp
tar --strip-components=1 -xf allocs.tar.gz -C allocs-temp 

printHeader "Installing components"

rm -rf $1/Allocs*
mv allocs-temp/* $1

printHeader "Cleanup"

rm allocs.tar.gz
rm -rf allocs-temp

printHeader "Finished! ヽ(´▽\`)/"
```

## Install/Update CPM

Please note that for this script `jq` is required to parse output of the Github API.

```bash
#!/bin/bash

MODS_FOLDER=$1

printHeader() {
    printf '%s\n' ""
    printf '%s\n' "##################"
    printf '%s\n' "$1"
    printf '%s\n' "##################"
    printf '%s\n' ""
}

downloadRelease() {
    curl "$1" -SsL -o CPM.tar.gz
}

if [ $# -eq 0 ]
  then
    echo "No arguments supplied. Please specify the path to your Mods folder as first argument."
    exit 1
fi

if hash jq 2>/dev/null; then
    echo "Dependencies OK."
else
    echo "jq must be installed."
    exit 1
fi

clear

API_RESPONSE=$(curl -s https://api.github.com/repos/Prisma501/CSMM-Patrons-Mod/releases/latest)
DL_LINK=$(echo $API_RESPONSE | jq -r .tarball_url)
DESCRIPTION=$(echo $API_RESPONSE | jq -r .body)
NAME=$(echo $API_RESPONSE | jq -r .name)

echo "Downloading release from $DL_LINK"

printHeader "Downloading files"

downloadRelease "$DL_LINK"

printHeader "Extracting files"

mkdir -p cpm-temp

tar --strip-components=1 -xf CPM.tar.gz -C cpm-temp 

printHeader "Installing components"

rm -rf $1/1CSMM_Patrons
mv cpm-temp/1CSMM_Patrons $1
mv cpm-temp/"Patched map.js Allocs WebMap"/map.js $1/Allocs_WebAndMapRendering/webserver/js

printHeader "Cleanup"

rm CPM.tar.gz
#rm -rf cpm-temp

printHeader "$NAME"
printf '%s\n' "$DESCRIPTION"

printHeader "Finished! ヽ(´▽\`)/"


```