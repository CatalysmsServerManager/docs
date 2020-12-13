# Upgrading CSMM

CSMM follows [semantic versioning](https://semver.org/) as much as possible. However, any change could have unforeseen issues. It is always advisable to create a backup of your data before upgrading.

Before upgading, please take a look at the [release notes](https://github.com/CatalysmsServerManager/7-days-to-die-server-manager/releases) for any important messages!

## Docker

To upgrade the containers, you must pull the new version. 

1. Check in your docker-compose.yml what image is specified (eg `image: catalysm/csmm:v1.20`) and adjust as needed
2. `docker-compose pull`
3. `docker-compose down && docker-compose up -d`

## Host installation

You can get the new files the same way you did when installing. Usually this means a `git pull` or `git checkout <tag>`.

## One-click

// TODO