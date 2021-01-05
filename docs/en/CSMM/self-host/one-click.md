# One-click installation

This method is by far the easiest of them all. It will automatically install, configure CSMM and all the services around it. It will even automatically setup a reverse proxy for you!

Via the [Digital Ocean marketplace](https://marketplace.digitalocean.com/apps/csmm?refcode=20e8f71f7ca0), you can install CSMM in just a few clicks! If you do not already have a Digital Ocean account, you can use [CSMMs referral link](https://m.do.co/c/20e8f71f7ca0) to get $100 credit for 60 days. Once you have signed up, click the first link to go straight to the one-click deployment.


::: tip
The image has been tested to deploy successfully on a 1GB RAM droplet, but may become overloaded quickly. We recommend a 2GB RAM droplet for stability.
:::


Once your image is deployed, you can SSH into the server. If you do not already have a preferred SSH application, you can download Putty [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

`ssh root@your_droplet_ip`

You will be prompted for some configuration values. You can find more info on these values on the [configuration guide](/en/CSMM/self-host/configuration.html)

If at any point you encounter an error that crashes the installation guide, you can restart the server by entering `reboot now` at the prompt. Once the server restarts, the installation wizard will begin again.

If you do not already have a domain name you wish to use for CSMM, you can create one for free at [Duck DNS](https://www.duckdns.org/).

After this, CSMM should be running on the domain you specified!
